"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export function VerifySearch() {
  const [code, setCode] = useState("");
  const router = useRouter();

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (code.trim()) router.push(`/verify/${encodeURIComponent(code.trim())}`);
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-3 sm:flex-row">
      <div className="relative flex-1">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-stone-400" />
        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter certificate ID (e.g. CG-9F3A-22K1)"
          className="h-14 w-full rounded-full border border-stone-300 bg-white pl-12 pr-4 text-[15px] placeholder:text-stone-400 focus:border-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 dark:border-stone-700 dark:bg-stone-900"
        />
      </div>
      <Button type="submit" size="lg">
        Verify
      </Button>
    </form>
  );
}
