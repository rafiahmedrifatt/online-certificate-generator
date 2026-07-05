import { UserPlus, MoreHorizontal } from "lucide-react";
import { PageHeader } from "@/components/dashboard/page-header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, THead, TBody, TR, TH, TD } from "@/components/ui/table";
import { members } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";

const roleVariant = {
  owner: "info",
  admin: "success",
  editor: "warning",
  viewer: "neutral",
} as const;

export default function TeamPage() {
  return (
    <div className="space-y-8">
      <PageHeader title="Team" description="Manage members and their permissions.">
        <Button size="sm">
          <UserPlus className="h-4 w-4" /> Invite member
        </Button>
      </PageHeader>

      {/* Invite bar */}
      <Card className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center">
        <Input placeholder="teammate@company.com" className="flex-1" />
        <select className="h-11 rounded-lg border border-stone-300 bg-white px-3.5 text-[15px] dark:border-stone-700 dark:bg-stone-950">
          <option>Editor</option>
          <option>Admin</option>
          <option>Viewer</option>
        </select>
        <Button size="md">Send invite</Button>
      </Card>

      <Card>
        <Table>
          <THead>
            <tr>
              <TH>Member</TH>
              <TH>Role</TH>
              <TH>Status</TH>
              <TH>Joined</TH>
              <TH></TH>
            </tr>
          </THead>
          <TBody>
            {members.map((m) => (
              <TR key={m.id}>
                <TD>
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-stone-100 text-xs font-semibold text-stone-600 dark:bg-stone-800 dark:text-stone-300">
                      {m.name.split(" ").map((p) => p[0]).join("").slice(0, 2)}
                    </span>
                    <div>
                      <p className="font-medium text-stone-900 dark:text-stone-100">{m.name}</p>
                      <p className="text-xs text-stone-400">{m.email}</p>
                    </div>
                  </div>
                </TD>
                <TD>
                  <Badge variant={roleVariant[m.role]}>{m.role}</Badge>
                </TD>
                <TD>
                  <Badge variant={m.status === "active" ? "success" : "warning"}>{m.status}</Badge>
                </TD>
                <TD className="text-stone-500">{formatDate(m.joinedAt)}</TD>
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
