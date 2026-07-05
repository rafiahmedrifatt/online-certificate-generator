import { ChevronsUpDown, Search, Bell, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { org, currentUser } from "@/lib/mock-data";

export function Topbar() {
  const initials = currentUser.name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);

  return (
    <header className="sticky top-0 z-20 flex h-16 items-center gap-4 border-b border-stone-200 bg-stone-50/80 px-4 backdrop-blur-md sm:px-6 dark:border-stone-800 dark:bg-stone-950/80">
      {/* Org switcher */}
      <button className="flex items-center gap-2 rounded-lg border border-stone-200 bg-white px-3 py-1.5 text-sm font-medium transition hover:bg-stone-50 dark:border-stone-800 dark:bg-stone-900 dark:hover:bg-stone-800">
        <span className="grid h-6 w-6 place-items-center rounded bg-amber-600 text-xs font-semibold text-white">
          {org.name[0]}
        </span>
        <span className="max-w-[10rem] truncate">{org.name}</span>
        <ChevronsUpDown className="h-3.5 w-3.5 text-stone-400" />
      </button>

      {/* Search */}
      <div className="relative hidden max-w-sm flex-1 sm:block">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
        <input
          placeholder="Search certificates, recipients…"
          className="h-10 w-full rounded-lg border border-stone-200 bg-white pl-9 pr-3 text-sm placeholder:text-stone-400 focus:border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500/20 dark:border-stone-800 dark:bg-stone-900"
        />
      </div>

      <div className="ml-auto flex items-center gap-2 sm:gap-3">
        <Button href="/certificates/new" size="sm" variant="primary" className="hidden sm:inline-flex">
          <Plus className="h-4 w-4" />
          New certificate
        </Button>
        <button className="grid h-9 w-9 place-items-center rounded-full text-stone-500 transition hover:bg-stone-100 dark:hover:bg-stone-800">
          <Bell className="h-[18px] w-[18px]" />
        </button>
        <button className="flex items-center gap-2 rounded-full p-0.5 pr-2 transition hover:bg-stone-100 dark:hover:bg-stone-800">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-stone-900 text-xs font-semibold text-white dark:bg-white dark:text-stone-900">
            {initials}
          </span>
        </button>
      </div>
    </header>
  );
}
