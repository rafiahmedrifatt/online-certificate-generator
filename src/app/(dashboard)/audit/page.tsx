import { Download } from "lucide-react";
import { PageHeader } from "@/components/dashboard/page-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, THead, TBody, TR, TH, TD } from "@/components/ui/table";
import { auditLog } from "@/lib/mock-data";

export default function AuditPage() {
  return (
    <div className="space-y-8">
      <PageHeader title="Audit log" description="A complete record of activity across your organization.">
        <Button variant="outline" size="sm">
          <Download className="h-4 w-4" /> Export CSV
        </Button>
      </PageHeader>

      <Card>
        <Table>
          <THead>
            <tr>
              <TH>Actor</TH>
              <TH>Action</TH>
              <TH>Target</TH>
              <TH>Time</TH>
              <TH>IP address</TH>
            </tr>
          </THead>
          <TBody>
            {auditLog.map((a) => (
              <TR key={a.id}>
                <TD className="font-medium text-stone-900 dark:text-stone-100">{a.actor}</TD>
                <TD>{a.action}</TD>
                <TD>
                  <span className="font-mono text-xs text-stone-500">{a.target}</span>
                </TD>
                <TD className="text-stone-500">{a.at}</TD>
                <TD className="font-mono text-xs text-stone-400">{a.ip}</TD>
              </TR>
            ))}
          </TBody>
        </Table>
      </Card>
    </div>
  );
}
