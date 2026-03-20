"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { ArrowLeft, FileDown, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

type Appointment = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  insurance: string;
  conditions: string[];
  preferred_date: string;
  preferred_time: string;
  visit_type: string;
  status: string;
  created_at: string;
};

const statuses = ["new", "contacted", "scheduled", "closed"];

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const fetchData = useCallback(async () => {
    const res = await fetch("/api/admin?table=appointments");
    if (res.status === 401) {
      router.push("/admin/login");
      return;
    }
    const data = await res.json();
    setAppointments(data);
    setLoading(false);
  }, [router]);

  useEffect(() => {
    const checkAuth = async () => {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push("/admin/login");
        return;
      }
      fetchData();
    };
    checkAuth();
  }, [router, fetchData]);

  const updateStatus = async (id: string, status: string) => {
    await fetch("/api/admin", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, table: "appointments", status }),
    });
    setAppointments((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status } : a))
    );
  };

  const exportCSV = () => {
    window.open("/api/admin?table=appointments&format=csv", "_blank");
  };

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <RefreshCw size={24} className="animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <Link href="/admin" className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary-dark mb-2">
            <ArrowLeft size={14} /> Back to Leads
          </Link>
          <h1 className="font-display text-3xl font-bold text-neutral-dark">Appointment Requests</h1>
        </div>
        <div className="flex gap-2">
          <button onClick={fetchData} className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 px-3 py-1.5 text-sm text-neutral-mid hover:text-neutral-dark">
            <RefreshCw size={14} /> Refresh
          </button>
          <button onClick={exportCSV} className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-sm text-white">
            <FileDown size={14} /> Export CSV
          </button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-sm">
          <thead className="bg-neutral-light">
            <tr>
              <th className="px-4 py-3 text-left font-medium text-neutral-mid">Name</th>
              <th className="px-4 py-3 text-left font-medium text-neutral-mid">Email</th>
              <th className="px-4 py-3 text-left font-medium text-neutral-mid">Phone</th>
              <th className="px-4 py-3 text-left font-medium text-neutral-mid">Insurance</th>
              <th className="px-4 py-3 text-left font-medium text-neutral-mid">Preferred Date</th>
              <th className="px-4 py-3 text-left font-medium text-neutral-mid">Time</th>
              <th className="px-4 py-3 text-left font-medium text-neutral-mid">Type</th>
              <th className="px-4 py-3 text-left font-medium text-neutral-mid">Submitted</th>
              <th className="px-4 py-3 text-left font-medium text-neutral-mid">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {appointments.map((apt) => (
              <tr key={apt.id} className="hover:bg-neutral-light/50">
                <td className="px-4 py-3 font-medium text-neutral-dark whitespace-nowrap">
                  {apt.first_name} {apt.last_name}
                </td>
                <td className="px-4 py-3 text-neutral-mid">{apt.email}</td>
                <td className="px-4 py-3 text-neutral-mid whitespace-nowrap">{apt.phone}</td>
                <td className="px-4 py-3 text-neutral-mid">{apt.insurance}</td>
                <td className="px-4 py-3 text-neutral-mid whitespace-nowrap">
                  {apt.preferred_date ? new Date(apt.preferred_date).toLocaleDateString() : "N/A"}
                </td>
                <td className="px-4 py-3 text-neutral-mid">{apt.preferred_time}</td>
                <td className="px-4 py-3">
                  <span className={cn(
                    "rounded-full px-2.5 py-0.5 text-xs font-medium",
                    apt.visit_type === "Telehealth" ? "bg-accent-light text-accent" : "bg-secondary-light text-secondary"
                  )}>
                    {apt.visit_type}
                  </span>
                </td>
                <td className="px-4 py-3 text-neutral-mid whitespace-nowrap">
                  {new Date(apt.created_at).toLocaleDateString()}
                </td>
                <td className="px-4 py-3">
                  <select
                    value={apt.status}
                    onChange={(e) => updateStatus(apt.id, e.target.value)}
                    className={cn(
                      "rounded-full px-3 py-1 text-xs font-medium border-0",
                      apt.status === "new" && "bg-blue-100 text-blue-700",
                      apt.status === "contacted" && "bg-yellow-100 text-yellow-700",
                      apt.status === "scheduled" && "bg-green-100 text-green-700",
                      apt.status === "closed" && "bg-gray-100 text-gray-700"
                    )}
                  >
                    {statuses.map((s) => (
                      <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
            {appointments.length === 0 && (
              <tr>
                <td colSpan={9} className="px-4 py-12 text-center text-neutral-mid">
                  No appointment requests yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
