import { NextResponse } from "next/server";
import pool from "@/lib/db";
import { sendConfirmationEmail, sendNotificationEmail } from "@/lib/email/templates";
import { z } from "zod/v4";
import { appointmentSchema } from "@/lib/validations/schemas";
import { checkRateLimit } from "@/lib/rate-limit";
import { sanitizeObject } from "@/lib/sanitize";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";
    const { success } = checkRateLimit(ip);
    if (!success) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
    }

    const data = appointmentSchema.parse(body);
    const safe = sanitizeObject(data);

    await pool.query(
      `INSERT INTO appointments (first_name, last_name, email, phone, dob, preferred_contact, conditions, insurance, message, preferred_date, preferred_time, visit_type)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`,
      [
        safe.firstName,
        safe.lastName,
        safe.email,
        safe.phone,
        safe.dob || null,
        safe.preferredContact,
        safe.conditions,
        safe.insurance,
        safe.message || null,
        safe.preferredDate,
        safe.preferredTime,
        safe.visitType,
      ]
    );

    try {
      await Promise.all([
        sendConfirmationEmail({
          email: safe.email,
          firstName: safe.firstName,
          type: "appointment",
        }),
        sendNotificationEmail({
          type: "appointment",
          firstName: safe.firstName,
          lastName: safe.lastName,
          email: safe.email,
          phone: safe.phone,
          insurance: safe.insurance,
          conditions: safe.conditions,
          message: safe.message,
          preferredDate: safe.preferredDate,
          preferredTime: safe.preferredTime,
          visitType: safe.visitType,
        }),
      ]);
    } catch (emailError) {
      console.error("Email error:", emailError);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Validation failed", issues: err.issues }, { status: 400 });
    }
    console.error("Unexpected error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
