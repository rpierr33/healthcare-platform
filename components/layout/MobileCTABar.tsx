"use client";

import Link from "next/link";
import { Calendar } from "lucide-react";

export function MobileCTABar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-gray-200 bg-white p-3 md:hidden">
      <Link
        href="/book"
        className="flex items-center justify-center gap-2 rounded-full bg-primary py-3 text-sm font-semibold text-white shadow-lg transition-all active:scale-95"
      >
        <Calendar size={18} />
        Book Now
      </Link>
    </div>
  );
}
