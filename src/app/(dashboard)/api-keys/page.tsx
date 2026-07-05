import { Plus, Copy, Trash2, KeyRound } from "lucide-react";
import { PageHeader } from "@/components/dashboard/page-header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { apiKeys } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";

export default function ApiKeysPage() {
  return (
    <div className="space-y-8">
      <PageHeader title="API keys" description="Programmatic access for issuing and verifying certificates.">
        <Button size="sm">
          <Plus className="h-4 w-4" /> Create key
        </Button>
      </PageHeader>

      <Card className="flex items-center gap-4 border-amber-200 bg-amber-50/50 p-4 dark:border-amber-900/40 dark:bg-amber-900/10">
        <KeyRound className="h-5 w-5 shrink-0 text-amber-600" />
        <p className="text-sm text-stone-600 dark:text-stone-400">
          Keep your secret keys safe. They grant full API access scoped to the permissions you assign.
          Base URL: <code className="rounded bg-stone-200 px-1.5 py-0.5 text-xs dark:bg-stone-800">https://api.certigen.app/v1</code>
        </p>
      </Card>

      <div className="space-y-3">
        {apiKeys.map((k) => (
          <Card key={k.id} className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <p className="font-medium">{k.name}</p>
                {k.scopes.map((s) => (
                  <Badge key={s} variant="neutral">{s}</Badge>
                ))}
              </div>
              <div className="mt-2 flex items-center gap-2">
                <code className="rounded bg-stone-100 px-2 py-1 font-mono text-xs text-stone-600 dark:bg-stone-800 dark:text-stone-400">
                  {k.prefix}
                </code>
                <button className="grid h-7 w-7 place-items-center rounded text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800">
                  <Copy className="h-3.5 w-3.5" />
                </button>
              </div>
              <p className="mt-2 text-xs text-stone-400">
                Created {formatDate(k.created)} · Last used {formatDate(k.lastUsed)}
              </p>
            </div>
            <button className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-stone-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20">
              <Trash2 className="h-4 w-4" />
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
}
