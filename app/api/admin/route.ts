import { NextResponse } from "next/server";
import pool from "@/lib/db";
import { verifySession } from "@/lib/auth";

const ALLOWED_TABLES = ["leads", "appointments"];

export async function GET(request: Request) {
  const session = await verifySession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const table = searchParams.get("table") || "leads";
  const format = searchParams.get("format");

  if (!ALLOWED_TABLES.includes(table)) {
    return NextResponse.json({ error: "Invalid table" }, { status: 400 });
  }

  const { rows: data } = await pool.query(
    `SELECT * FROM ${table} ORDER BY created_at DESC`
  );

  if (format === "csv") {
    if (!data || data.length === 0) {
      return new Response("No data", { status: 200, headers: { "Content-Type": "text/csv" } });
    }
    const headers = Object.keys(data[0]);
    const csv = [
      headers.join(","),
      ...data.map((row: Record<string, unknown>) =>
        headers.map((h) => {
          const val = row[h];
          const str = Array.isArray(val) ? val.join("; ") : String(val ?? "");
          return `"${str.replace(/"/g, '""')}"`;
        }).join(",")
      ),
    ].join("\n");

    return new Response(csv, {
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": `attachment; filename="${table}-${new Date().toISOString().split("T")[0]}.csv"`,
      },
    });
  }

  return NextResponse.json(data);
}

export async function PATCH(request: Request) {
  const session = await verifySession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { id, table, status } = body;

  if (!id || !table || !status) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  if (!ALLOWED_TABLES.includes(table)) {
    return NextResponse.json({ error: "Invalid table" }, { status: 400 });
  }

  await pool.query(
    `UPDATE ${table} SET status = $1 WHERE id = $2`,
    [status, id]
  );

  return NextResponse.json({ success: true });
}
