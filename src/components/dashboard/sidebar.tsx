"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  LayoutTemplate,
  Award,
  Upload,
  Users,
  BarChart3,
  ScrollText,
  KeyRound,
  CreditCard,
  Settings,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  {
    section: "Overview",
    items: [
      { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
      { href: "/analytics", label: "Analytics", icon: BarChart3 },
    ],
  },
  {
    section: "Certificates",
    items: [
      { href: "/templates", label: "Templates", icon: LayoutTemplate },
      { href: "/certificates", label: "Certificates", icon: Award },
      { href: "/bulk", label: "Bulk generate", icon: Upload },
    ],
  },
  {
    section: "Organization",
    items: [
      { href: "/team", label: "Team", icon: Users },
      { href: "/audit", label: "Audit log", icon: ScrollText },
      { href: "/api-keys", label: "API keys", icon: KeyRound },
      { href: "/billing", label: "Billing", icon: CreditCard },
      { href: "/settings", label: "Settings", icon: Settings },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-stone-200 bg-white lg:flex dark:border-stone-800 dark:bg-stone-900">
      <div className="flex h-16 items-center border-b border-stone-200 px-6 dark:border-stone-800">
        <Link href="/dashboard" className="font-serif text-xl font-semibold tracking-tight">
          CertiGen
        </Link>
      </div>

      <nav className="flex-1 space-y-6 overflow-y-auto px-3 py-6">
        {nav.map((group) => (
          <div key={group.section}>
            <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-stone-400">
              {group.section}
            </p>
            <div className="space-y-0.5">
              {group.items.map((item) => {
                const active =
                  pathname === item.href || pathname.startsWith(item.href + "/");
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition",
                      active
                        ? "bg-stone-900 text-white dark:bg-white dark:text-stone-900"
                        : "text-stone-600 hover:bg-stone-100 hover:text-stone-900 dark:text-stone-400 dark:hover:bg-stone-800 dark:hover:text-white",
                    )}
                  >
                    <Icon className="h-[18px] w-[18px]" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="border-t border-stone-200 p-3 dark:border-stone-800">
        <Link
          href="/admin"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-stone-500 transition hover:bg-stone-100 hover:text-stone-900 dark:text-stone-400 dark:hover:bg-stone-800 dark:hover:text-white"
        >
          <ShieldCheck className="h-[18px] w-[18px]" />
          Super Admin
        </Link>
      </div>
    </aside>
  );
}
