"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Building2,
  Users,
  CreditCard,
  LifeBuoy,
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/admin", label: "Overview", icon: LayoutDashboard },
  { href: "/admin/organizations", label: "Organizations", icon: Building2 },
  { href: "/admin/users", label: "Users", icon: Users },
  { href: "/admin/payments", label: "Payments", icon: CreditCard },
  { href: "/admin/support", label: "Support", icon: LifeBuoy },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-60 shrink-0 flex-col border-r border-stone-800 bg-stone-950 text-stone-300 lg:flex">
      <div className="flex h-16 items-center gap-2 border-b border-stone-800 px-6">
        <ShieldCheck className="h-5 w-5 text-amber-500" />
        <span className="font-serif text-lg font-semibold tracking-tight text-white">Super Admin</span>
      </div>

      <nav className="flex-1 space-y-0.5 p-3">
        {nav.map((item) => {
          const active = item.href === "/admin" ? pathname === item.href : pathname.startsWith(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition",
                active ? "bg-amber-600 text-white" : "text-stone-400 hover:bg-stone-800 hover:text-white",
              )}
            >
              <Icon className="h-[18px] w-[18px]" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-stone-800 p-3">
        <Link
          href="/dashboard"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-stone-400 transition hover:bg-stone-800 hover:text-white"
        >
          <ArrowLeft className="h-[18px] w-[18px]" />
          Back to app
        </Link>
      </div>
    </aside>
  );
}
