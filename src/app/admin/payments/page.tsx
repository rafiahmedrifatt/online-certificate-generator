import { Download } from "lucide-react";
import { PageHeader } from "@/components/dashboard/page-header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, THead, TBody, TR, TH, TD } from "@/components/ui/table";
import { payments } from "@/lib/admin-data";
import { formatDate } from "@/lib/utils";

const summary = [
  { label: "Revenue this month", value: "$48,320" },
  { label: "Successful payments", value: "1,204" },
  { label: "Failed payments", value: "18" },
  { label: "Refunds", value: "$620" },
];

export default function AdminPaymentsPage() {
  return (
    <div className="space-y-8">
      <PageHeader title="Payments" description="Subscription revenue and transaction history.">
        <Button variant="outline" size="sm">
          <Download className="h-4 w-4" /> Export
        </Button>
      </PageHeader>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {summary.map((s) => (
          <Card key={s.label} className="p-5">
            <p className="text-sm text-stone-500">{s.label}</p>
            <p className="mt-2 font-serif text-3xl font-light">{s.value}</p>
          </Card>
        ))}
      </div>

      <Card>
        <Table>
          <THead>
            <tr>
              <TH>Organization</TH>
              <TH>Plan</TH>
              <TH>Amount</TH>
              <TH>Status</TH>
              <TH>Date</TH>
            </tr>
          </THead>
          <TBody>
            {payments.map((p) => (
              <TR key={p.id}>
                <TD className="font-medium text-stone-900 dark:text-stone-100">{p.org}</TD>
                <TD>{p.plan}</TD>
                <TD>{p.amount}</TD>
                <TD>
                  <Badge variant={p.status === "succeeded" ? "success" : "danger"}>{p.status}</Badge>
                </TD>
                <TD className="text-stone-500">{formatDate(p.date)}</TD>
              </TR>
            ))}
          </TBody>
        </Table>
      </Card>
    </div>
  );
}
