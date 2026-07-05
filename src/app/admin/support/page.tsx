import { PageHeader } from "@/components/dashboard/page-header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, THead, TBody, TR, TH, TD } from "@/components/ui/table";
import { tickets } from "@/lib/admin-data";

const priorityVariant = { high: "danger", medium: "warning", low: "neutral" } as const;
const statusVariant = { open: "info", pending: "warning", closed: "neutral" } as const;

export default function AdminSupportPage() {
  return (
    <div className="space-y-8">
      <PageHeader title="Support" description="Customer support requests across the platform." />

      <div className="flex gap-2">
        {["All", "Open", "Pending", "Closed"].map((f, i) => (
          <button
            key={f}
            className={
              i === 0
                ? "rounded-full bg-stone-900 px-4 py-1.5 text-sm font-medium text-white dark:bg-white dark:text-stone-900"
                : "rounded-full border border-stone-200 px-4 py-1.5 text-sm font-medium text-stone-600 hover:bg-stone-100 dark:border-stone-800 dark:text-stone-400 dark:hover:bg-stone-800"
            }
          >
            {f}
          </button>
        ))}
      </div>

      <Card>
        <Table>
          <THead>
            <tr>
              <TH>Ticket</TH>
              <TH>Subject</TH>
              <TH>Organization</TH>
              <TH>Priority</TH>
              <TH>Status</TH>
              <TH>Updated</TH>
            </tr>
          </THead>
          <TBody>
            {tickets.map((t) => (
              <TR key={t.id}>
                <TD className="font-mono text-xs text-stone-500">{t.id}</TD>
                <TD className="font-medium text-stone-900 dark:text-stone-100">{t.subject}</TD>
                <TD>{t.org}</TD>
                <TD>
                  <Badge variant={priorityVariant[t.priority as keyof typeof priorityVariant]}>{t.priority}</Badge>
                </TD>
                <TD>
                  <Badge variant={statusVariant[t.status as keyof typeof statusVariant]}>{t.status}</Badge>
                </TD>
                <TD className="text-stone-500">{t.updated}</TD>
              </TR>
            ))}
          </TBody>
        </Table>
      </Card>
    </div>
  );
}
