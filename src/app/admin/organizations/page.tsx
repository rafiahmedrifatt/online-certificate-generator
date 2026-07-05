import { Search, MoreHorizontal, LogIn } from "lucide-react";
import { PageHeader } from "@/components/dashboard/page-header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, THead, TBody, TR, TH, TD } from "@/components/ui/table";
import { organizations } from "@/lib/admin-data";
import { formatDate } from "@/lib/utils";

const statusVariant = { active: "success", past_due: "warning", suspended: "danger" } as const;

export default function AdminOrganizationsPage() {
  return (
    <div className="space-y-8">
      <PageHeader title="Organizations" description={`${organizations.length} organizations on the platform.`} />

      <Card>
        <div className="border-b border-stone-200 p-4 dark:border-stone-800">
          <div className="relative max-w-sm">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
            <input
              placeholder="Search organizations…"
              className="h-10 w-full rounded-lg border border-stone-200 bg-white pl-9 pr-3 text-sm dark:border-stone-800 dark:bg-stone-950"
            />
          </div>
        </div>
        <Table>
          <THead>
            <tr>
              <TH>Organization</TH>
              <TH>Plan</TH>
              <TH>Members</TH>
              <TH>Certificates</TH>
              <TH>Status</TH>
              <TH>Joined</TH>
              <TH className="text-right">Actions</TH>
            </tr>
          </THead>
          <TBody>
            {organizations.map((o) => (
              <TR key={o.id}>
                <TD>
                  <div className="flex items-center gap-3">
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-stone-900 text-xs font-semibold text-white dark:bg-white dark:text-stone-900">
                      {o.name[0]}
                    </span>
                    <span className="font-medium text-stone-900 dark:text-stone-100">{o.name}</span>
                  </div>
                </TD>
                <TD>
                  <Badge variant={o.plan === "Enterprise" ? "info" : o.plan === "Pro" ? "warning" : "neutral"}>
                    {o.plan}
                  </Badge>
                </TD>
                <TD>{o.members}</TD>
                <TD>{o.certificates.toLocaleString()}</TD>
                <TD>
                  <Badge variant={statusVariant[o.status as keyof typeof statusVariant]}>
                    {o.status.replace("_", " ")}
                  </Badge>
                </TD>
                <TD className="text-stone-500">{formatDate(o.joined)}</TD>
                <TD>
                  <div className="flex items-center justify-end gap-1">
                    <button className="inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-medium text-amber-700 hover:bg-amber-50 dark:text-amber-500 dark:hover:bg-amber-900/20">
                      <LogIn className="h-3.5 w-3.5" /> Impersonate
                    </button>
                    <button className="grid h-8 w-8 place-items-center rounded-lg text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </div>
                </TD>
              </TR>
            ))}
          </TBody>
        </Table>
      </Card>
    </div>
  );
}
