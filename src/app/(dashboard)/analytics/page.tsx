import { PageHeader } from "@/components/dashboard/page-header";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { stats, issuanceSeries, issuanceMonths, templates } from "@/lib/mock-data";

const verificationSeries = [180, 240, 300, 280, 420, 510, 620, 700, 810, 760, 940, 1080];
const topTemplates = [...templates].sort((a, b) => b.certificatesIssued - a.certificatesIssued).slice(0, 5);
const maxTpl = Math.max(...topTemplates.map((t) => t.certificatesIssued));

function LineBars({ series, color }: { series: number[]; color: string }) {
  const max = Math.max(...series);
  return (
    <div className="flex h-40 items-end gap-1.5">
      {series.map((v, i) => (
        <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
          <div className={`w-full rounded-t ${color}`} style={{ height: `${(v / max) * 100}%` }} />
          <span className="text-[10px] text-stone-400">{issuanceMonths[i]}</span>
        </div>
      ))}
    </div>
  );
}

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <PageHeader title="Analytics" description="Certificate issuance, verification, and template insights." />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <Card key={s.label} className="p-5">
            <p className="text-sm text-stone-500">{s.label}</p>
            <p className="mt-2 font-serif text-3xl font-light">{s.value}</p>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">Certificates issued</CardTitle>
            <Badge variant="warning">Monthly</Badge>
          </div>
          <div className="mt-6">
            <LineBars series={issuanceSeries} color="bg-amber-500/80" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">Verifications</CardTitle>
            <Badge variant="info">Monthly</Badge>
          </div>
          <div className="mt-6">
            <LineBars series={verificationSeries} color="bg-sky-500/80" />
          </div>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Top templates by usage</CardTitle>
        </CardHeader>
        <div className="space-y-4 p-6 pt-0">
          {topTemplates.map((t) => (
            <div key={t.id}>
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">{t.name}</span>
                <span className="text-stone-500">{t.certificatesIssued.toLocaleString()}</span>
              </div>
              <div className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full bg-stone-100 dark:bg-stone-800">
                <div
                  className="h-full rounded-full bg-stone-900 dark:bg-stone-200"
                  style={{ width: `${(t.certificatesIssued / maxTpl) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
