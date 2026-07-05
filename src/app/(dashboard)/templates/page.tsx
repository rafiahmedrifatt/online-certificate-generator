import Link from "next/link";
import { Plus, Pencil, Copy, MoreHorizontal } from "lucide-react";
import { PageHeader } from "@/components/dashboard/page-header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { templates } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";

const swatch: Record<string, string> = {
  amber: "from-amber-200 to-amber-50 dark:from-amber-900/40 dark:to-stone-900",
  emerald: "from-emerald-200 to-emerald-50 dark:from-emerald-900/40 dark:to-stone-900",
  sky: "from-sky-200 to-sky-50 dark:from-sky-900/40 dark:to-stone-900",
  rose: "from-rose-200 to-rose-50 dark:from-rose-900/40 dark:to-stone-900",
  violet: "from-violet-200 to-violet-50 dark:from-violet-900/40 dark:to-stone-900",
  teal: "from-teal-200 to-teal-50 dark:from-teal-900/40 dark:to-stone-900",
};

export default function TemplatesPage() {
  return (
    <div className="space-y-8">
      <PageHeader title="Templates" description="Design and manage reusable certificate layouts.">
        <Button href="/templates/new/designer" size="sm">
          <Plus className="h-4 w-4" /> New template
        </Button>
      </PageHeader>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* New template card */}
        <Link href="/templates/new/designer">
          <Card className="flex aspect-[1.414/1] flex-col items-center justify-center gap-3 border-dashed text-stone-400 transition hover:border-stone-400 hover:text-stone-600 dark:hover:border-stone-600">
            <span className="grid h-12 w-12 place-items-center rounded-full border border-dashed border-current">
              <Plus className="h-6 w-6" />
            </span>
            <span className="text-sm font-medium">Create a template</span>
          </Card>
        </Link>

        {templates.map((t) => (
          <Card key={t.id} className="group overflow-hidden">
            <Link href={`/templates/${t.id}/designer`}>
              <div
                className={`relative flex aspect-[1.414/1] items-center justify-center bg-linear-to-br ${swatch[t.accent]} p-6`}
              >
                <div className="flex h-full w-full flex-col items-center justify-center border border-white/60 bg-white/40 p-4 text-center backdrop-blur-sm dark:border-white/10 dark:bg-black/20">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-stone-500">Certificate</p>
                  <p className="mt-2 font-serif text-lg italic text-stone-700 dark:text-stone-200">
                    Recipient Name
                  </p>
                  <div className="mt-2 h-px w-12 bg-stone-400/60" />
                </div>
              </div>
            </Link>
            <div className="flex items-start justify-between p-4">
              <div>
                <Link href={`/templates/${t.id}/designer`} className="font-medium tracking-tight hover:underline">
                  {t.name}
                </Link>
                <div className="mt-1.5 flex items-center gap-2">
                  <Badge variant="neutral">{t.category}</Badge>
                  <span className="text-xs text-stone-400">{t.fields} fields</span>
                </div>
                <p className="mt-2 text-xs text-stone-400">
                  {t.certificatesIssued.toLocaleString()} issued · updated {formatDate(t.updatedAt)}
                </p>
              </div>
              <div className="flex items-center gap-1 opacity-0 transition group-hover:opacity-100">
                <Link
                  href={`/templates/${t.id}/designer`}
                  className="grid h-8 w-8 place-items-center rounded-lg text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-800"
                >
                  <Pencil className="h-4 w-4" />
                </Link>
                <button className="grid h-8 w-8 place-items-center rounded-lg text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-800">
                  <Copy className="h-4 w-4" />
                </button>
                <button className="grid h-8 w-8 place-items-center rounded-lg text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-800">
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
