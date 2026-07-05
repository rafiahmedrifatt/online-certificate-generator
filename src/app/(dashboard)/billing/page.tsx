import { Check, Download } from "lucide-react";
import { PageHeader } from "@/components/dashboard/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, THead, TBody, TR, TH, TD } from "@/components/ui/table";
import { plans, org } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const usage = [
  { label: "Certificates this month", used: 8420, limit: 10000 },
  { label: "Team members", used: 4, limit: 5 },
  { label: "Templates", used: 18, limit: Infinity },
];

const invoices = [
  { id: "INV-2026-07", date: "Jul 1, 2026", amount: "$39.00", status: "Paid" },
  { id: "INV-2026-06", date: "Jun 1, 2026", amount: "$39.00", status: "Paid" },
  { id: "INV-2026-05", date: "May 1, 2026", amount: "$39.00", status: "Paid" },
];

export default function BillingPage() {
  return (
    <div className="space-y-8">
      <PageHeader title="Billing" description="Manage your subscription, usage, and invoices." />

      {/* Current plan + usage */}
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Current plan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-4xl font-light">{org.plan}</span>
              <span className="text-stone-400">$39/mo</span>
            </div>
            <p className="mt-1 text-sm text-stone-500">Renews Aug 1, 2026</p>
            <div className="mt-5 flex gap-2">
              <Button variant="outline" size="sm">Change plan</Button>
              <Button variant="ghost" size="sm">Cancel</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Usage this cycle</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            {usage.map((u) => {
              const pct = u.limit === Infinity ? 0 : Math.round((u.used / u.limit) * 100);
              return (
                <div key={u.label}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-stone-600 dark:text-stone-400">{u.label}</span>
                    <span className="font-medium">
                      {u.used.toLocaleString()}
                      {u.limit === Infinity ? " · unlimited" : ` / ${u.limit.toLocaleString()}`}
                    </span>
                  </div>
                  {u.limit !== Infinity && (
                    <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-stone-200 dark:bg-stone-800">
                      <div
                        className={cn("h-full rounded-full", pct > 85 ? "bg-red-500" : "bg-amber-500")}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>

      {/* Plans */}
      <div>
        <h3 className="mb-4 font-serif text-2xl font-light tracking-tight">Plans</h3>
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <Card
              key={p.name}
              className={cn("relative p-6", p.highlighted && "border-amber-400 ring-1 ring-amber-400")}
            >
              {p.highlighted && (
                <Badge variant="warning" className="absolute -top-3 left-6">
                  Current plan
                </Badge>
              )}
              <p className="font-medium">{p.name}</p>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="font-serif text-4xl font-light">
                  {p.price === null ? "Custom" : `$${p.price}`}
                </span>
                {p.price !== null && p.price > 0 && <span className="text-stone-400">/mo</span>}
              </div>
              <p className="mt-1 text-sm text-stone-500">{p.tagline}</p>
              <ul className="mt-5 space-y-2.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-stone-600 dark:text-stone-400">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                variant={p.highlighted ? "outline" : "primary"}
                size="md"
                className="mt-6 w-full"
                disabled={p.highlighted}
              >
                {p.highlighted ? "Current plan" : p.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>

      {/* Invoices */}
      <Card>
        <CardHeader>
          <CardTitle>Invoices</CardTitle>
        </CardHeader>
        <Table>
          <THead>
            <tr>
              <TH>Invoice</TH>
              <TH>Date</TH>
              <TH>Amount</TH>
              <TH>Status</TH>
              <TH></TH>
            </tr>
          </THead>
          <TBody>
            {invoices.map((inv) => (
              <TR key={inv.id}>
                <TD className="font-mono text-xs">{inv.id}</TD>
                <TD>{inv.date}</TD>
                <TD>{inv.amount}</TD>
                <TD>
                  <Badge variant="success">{inv.status}</Badge>
                </TD>
                <TD className="text-right">
                  <button className="inline-flex items-center gap-1 text-sm text-amber-700 hover:underline dark:text-amber-500">
                    <Download className="h-3.5 w-3.5" /> PDF
                  </button>
                </TD>
              </TR>
            ))}
          </TBody>
        </Table>
      </Card>
    </div>
  );
}
