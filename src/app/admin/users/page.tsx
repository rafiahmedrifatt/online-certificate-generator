import { Search, MoreHorizontal } from "lucide-react";
import { PageHeader } from "@/components/dashboard/page-header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, THead, TBody, TR, TH, TD } from "@/components/ui/table";
import { platformUsers } from "@/lib/admin-data";
import { formatDate } from "@/lib/utils";

export default function AdminUsersPage() {
  return (
    <div className="space-y-8">
      <PageHeader title="Users" description="All users across every organization." />

      <Card>
        <div className="border-b border-stone-200 p-4 dark:border-stone-800">
          <div className="relative max-w-sm">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
            <input
              placeholder="Search by name or email…"
              className="h-10 w-full rounded-lg border border-stone-200 bg-white pl-9 pr-3 text-sm dark:border-stone-800 dark:bg-stone-950"
            />
          </div>
        </div>
        <Table>
          <THead>
            <tr>
              <TH>User</TH>
              <TH>Organization</TH>
              <TH>Role</TH>
              <TH>Last active</TH>
              <TH></TH>
            </tr>
          </THead>
          <TBody>
            {platformUsers.map((u) => (
              <TR key={u.id}>
                <TD>
                  <div className="flex items-center gap-3">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-stone-100 text-[11px] font-semibold text-stone-600 dark:bg-stone-800 dark:text-stone-300">
                      {u.name.split(" ").map((p) => p[0]).join("").slice(0, 2)}
                    </span>
                    <div>
                      <p className="font-medium text-stone-900 dark:text-stone-100">{u.name}</p>
                      <p className="text-xs text-stone-400">{u.email}</p>
                    </div>
                  </div>
                </TD>
                <TD>{u.org}</TD>
                <TD>
                  <Badge variant="neutral">{u.role}</Badge>
                </TD>
                <TD className="text-stone-500">{formatDate(u.lastActive)}</TD>
                <TD className="text-right">
                  <button className="grid h-8 w-8 place-items-center rounded-lg text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800">
                    <MoreHorizontal className="h-4 w-4" />
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
