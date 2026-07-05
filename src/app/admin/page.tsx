import Link from "next/link";
import { PageHeader } from "@/components/dashboard/page-header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { platformStats, organizations, tickets } from "@/lib/admin-data";

const growth = [42, 51, 48, 64, 72, 81, 76, 92, 104, 98, 118, 130];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function AdminOverviewPage() {
  const max = Math.max(...growth);
  return (
    <div className="space-y-8">
      <PageHeader title="Platform overview" description="Health and growth across all organizations." />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {platformStats.map((s) => (
          <Card key={s.label} className="p-5">
            <p className="text-sm text-stone-500">{s.label}</p>
            <p className="mt-2 font-serif text-3xl font-light">{s.value}</p>
            <p className="mt-1 text-xs text-emerald-600 dark:text-emerald-400">{s.delta}</p>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="p-6 lg:col-span-2">
          <h3 className="text-lg font-medium tracking-tight">New organizations</h3>
          <p className="text-sm text-stone-500">Last 12 months</p>
          <div className="mt-6 flex h-48 items-end gap-2">
            {growth.map((v, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-2">
                <div className="w-full rounded-t-md bg-amber-500/80" style={{ height: `${(v / max) * 100}%` }} />
                <span className="text-[10px] text-stone-400">{months[i]}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium tracking-tight">Open tickets</h3>
            <Link href="/admin/support" className="text-sm text-amber-700 hover:underline dark:text-amber-500">
              All
            </Link>
          </div>
          <div className="mt-4 space-y-3">
            {tickets.filter((t) => t.status !== "closed").map((t) => (
              <div key={t.id} className="rounded-lg border border-stone-200 p-3 dark:border-stone-800">
                <p className="text-sm font-medium leading-tight">{t.subject}</p>
                <div className="mt-1.5 flex items-center gap-2">
                  <Badge variant={t.priority === "high" ? "danger" : t.priority === "medium" ? "warning" : "neutral"}>
                    {t.priority}
                  </Badge>
                  <span className="text-xs text-stone-400">{t.org}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-medium tracking-tight">Recently active organizations</h3>
        <div className="mt-4 space-y-1">
          {organizations.slice(0, 4).map((o) => (
            <div key={o.id} className="flex items-center justify-between rounded-lg px-3 py-3 hover:bg-stone-50 dark:hover:bg-stone-800/40">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-stone-900 text-sm font-semibold text-white dark:bg-white dark:text-stone-900">
                  {o.name[0]}
                </span>
                <div>
                  <p className="text-sm font-medium">{o.name}</p>
                  <p className="text-xs text-stone-400">{o.certificates.toLocaleString()} certificates</p>
                </div>
              </div>
              <Badge variant={o.plan === "Enterprise" ? "info" : o.plan === "Pro" ? "warning" : "neutral"}>
                {o.plan}
              </Badge>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
