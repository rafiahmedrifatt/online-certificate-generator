import Link from "next/link";
import { ArrowUpRight, ArrowDownRight, Upload, Plus, LayoutTemplate } from "lucide-react";
import { PageHeader } from "@/components/dashboard/page-header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  stats,
  issuanceSeries,
  issuanceMonths,
  certificates,
  statusVariant,
  currentUser,
} from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export default function DashboardPage() {
  const max = Math.max(...issuanceSeries);
  const recent = certificates.slice(0, 5);

  return (
    <div className="space-y-8">
      <PageHeader
        title={`Welcome back, ${currentUser.name.split(" ")[0]}`}
        description="Here's what's happening across your organization."
      >
        <Button href="/bulk" variant="outline" size="sm">
          <Upload className="h-4 w-4" /> Bulk generate
        </Button>
        <Button href="/certificates/new" size="sm">
          <Plus className="h-4 w-4" /> New certificate
        </Button>
      </PageHeader>

      {/* Stat cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <Card key={s.label} className="p-5">
            <p className="text-sm text-stone-500 dark:text-stone-400">{s.label}</p>
            <div className="mt-2 flex items-end justify-between">
              <span className="font-serif text-3xl font-light tracking-tight">{s.value}</span>
              <span
                className={cn(
                  "flex items-center gap-0.5 text-sm font-medium",
                  s.trend === "up" ? "text-emerald-600 dark:text-emerald-400" : "text-red-500",
                )}
              >
                {s.trend === "up" ? (
                  <ArrowUpRight className="h-4 w-4" />
                ) : (
                  <ArrowDownRight className="h-4 w-4" />
                )}
                {s.delta}
              </span>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Chart */}
        <Card className="p-6 lg:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium tracking-tight">Certificates issued</h3>
              <p className="text-sm text-stone-500 dark:text-stone-400">Last 12 months</p>
            </div>
            <Badge variant="success">+18% YoY</Badge>
          </div>
          <div className="mt-8 flex h-56 items-end gap-2">
            {issuanceSeries.map((v, i) => (
              <div key={i} className="group flex flex-1 flex-col items-center gap-2">
                <div className="relative flex w-full flex-1 items-end">
                  <div
                    className="w-full rounded-t-md bg-amber-500/80 transition group-hover:bg-amber-600"
                    style={{ height: `${(v / max) * 100}%` }}
                  >
                    <span className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 rounded bg-stone-900 px-1.5 py-0.5 text-[10px] text-white opacity-0 transition group-hover:opacity-100 dark:bg-white dark:text-stone-900">
                      {v}
                    </span>
                  </div>
                </div>
                <span className="text-[11px] text-stone-400">{issuanceMonths[i]}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Quick actions */}
        <Card className="p-6">
          <h3 className="text-lg font-medium tracking-tight">Quick actions</h3>
          <div className="mt-5 space-y-3">
            {[
              { href: "/certificates/new", icon: Plus, label: "Issue a certificate", desc: "Single recipient" },
              { href: "/bulk", icon: Upload, label: "Bulk generate", desc: "From CSV or Excel" },
              { href: "/templates", icon: LayoutTemplate, label: "Design a template", desc: "Drag & drop editor" },
            ].map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="flex items-center gap-4 rounded-lg border border-stone-200 p-3.5 transition hover:border-stone-300 hover:bg-stone-50 dark:border-stone-800 dark:hover:bg-stone-800/50"
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                  <a.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-medium">{a.label}</p>
                  <p className="text-xs text-stone-500 dark:text-stone-400">{a.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </Card>
      </div>

      {/* Recent certificates */}
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium tracking-tight">Recent certificates</h3>
          <Link href="/certificates" className="text-sm text-amber-700 hover:underline dark:text-amber-500">
            View all
          </Link>
        </div>
        <div className="mt-4 space-y-1">
          {recent.map((c) => (
            <Link
              key={c.id}
              href={`/certificates/${c.id}`}
              className="flex items-center justify-between rounded-lg px-3 py-3 transition hover:bg-stone-50 dark:hover:bg-stone-800/50"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-stone-100 text-xs font-semibold text-stone-600 dark:bg-stone-800 dark:text-stone-300">
                  {c.recipientName.split(" ").map((p) => p[0]).join("").slice(0, 2)}
                </span>
                <div>
                  <p className="text-sm font-medium">{c.recipientName}</p>
                  <p className="text-xs text-stone-500 dark:text-stone-400">{c.course}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="hidden font-mono text-xs text-stone-400 sm:inline">{c.publicId}</span>
                <Badge variant={statusVariant[c.status]}>{c.status}</Badge>
              </div>
            </Link>
          ))}
        </div>
      </Card>
    </div>
  );
}
