import Link from "next/link";
import { Plus, Upload, Download, Search, Filter } from "lucide-react";
import { PageHeader } from "@/components/dashboard/page-header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, THead, TBody, TR, TH, TD } from "@/components/ui/table";
import { certificates, statusVariant } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";

const filters = ["All", "Issued", "Revoked", "Expired", "Draft"];

export default function CertificatesPage() {
  return (
    <div className="space-y-8">
      <PageHeader title="Certificates" description={`${certificates.length} certificates issued across all templates.`}>
        <Button href="/bulk" variant="outline" size="sm">
          <Upload className="h-4 w-4" /> Bulk
        </Button>
        <Button href="/certificates/new" size="sm">
          <Plus className="h-4 w-4" /> New certificate
        </Button>
      </PageHeader>

      <Card>
        {/* Toolbar */}
        <div className="flex flex-col gap-3 border-b border-stone-200 p-4 sm:flex-row sm:items-center dark:border-stone-800">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
            <input
              placeholder="Search by name, email, or certificate ID…"
              className="h-10 w-full rounded-lg border border-stone-200 bg-white pl-9 pr-3 text-sm placeholder:text-stone-400 focus:border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500/20 dark:border-stone-800 dark:bg-stone-950"
            />
          </div>
          <div className="flex items-center gap-1 rounded-lg border border-stone-200 p-1 dark:border-stone-800">
            {filters.map((f, i) => (
              <button
                key={f}
                className={
                  i === 0
                    ? "rounded-md bg-stone-900 px-3 py-1.5 text-xs font-medium text-white dark:bg-white dark:text-stone-900"
                    : "rounded-md px-3 py-1.5 text-xs font-medium text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-800"
                }
              >
                {f}
              </button>
            ))}
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4" /> More
          </Button>
        </div>

        <Table>
          <THead>
            <tr>
              <TH>Recipient</TH>
              <TH>Course</TH>
              <TH>Certificate ID</TH>
              <TH>Status</TH>
              <TH>Issued</TH>
              <TH className="text-right">Actions</TH>
            </tr>
          </THead>
          <TBody>
            {certificates.map((c) => (
              <TR key={c.id}>
                <TD>
                  <Link href={`/certificates/${c.id}`} className="flex items-center gap-3 hover:underline">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-stone-100 text-[11px] font-semibold text-stone-600 dark:bg-stone-800 dark:text-stone-300">
                      {c.recipientName.split(" ").map((p) => p[0]).join("").slice(0, 2)}
                    </span>
                    <div>
                      <p className="font-medium text-stone-900 dark:text-stone-100">{c.recipientName}</p>
                      <p className="text-xs text-stone-400">{c.recipientEmail}</p>
                    </div>
                  </Link>
                </TD>
                <TD>{c.course}</TD>
                <TD>
                  <span className="font-mono text-xs text-stone-500">{c.publicId}</span>
                </TD>
                <TD>
                  <Badge variant={statusVariant[c.status]}>{c.status}</Badge>
                </TD>
                <TD className="text-stone-500">{formatDate(c.issuedAt)}</TD>
                <TD>
                  <div className="flex items-center justify-end gap-1">
                    <button className="grid h-8 w-8 place-items-center rounded-lg text-stone-400 hover:bg-stone-100 hover:text-stone-700 dark:hover:bg-stone-800">
                      <Download className="h-4 w-4" />
                    </button>
                    <Link
                      href={`/certificates/${c.id}`}
                      className="rounded-lg px-2.5 py-1 text-xs font-medium text-amber-700 hover:bg-amber-50 dark:text-amber-500 dark:hover:bg-amber-900/20"
                    >
                      View
                    </Link>
                  </div>
                </TD>
              </TR>
            ))}
          </TBody>
        </Table>

        <div className="flex items-center justify-between border-t border-stone-200 px-4 py-3 text-sm text-stone-500 dark:border-stone-800">
          <span>Showing 1–{certificates.length} of 12,480</span>
          <div className="flex gap-1">
            <Button variant="outline" size="sm" className="h-8">Previous</Button>
            <Button variant="outline" size="sm" className="h-8">Next</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
