import { ShieldCheck } from "lucide-react";
import { PublicNav } from "@/components/public-nav";
import { VerifySearch } from "./verify-search";

export default function VerifyLandingPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-stone-50 text-stone-900 dark:bg-stone-950 dark:text-stone-100">
      <PublicNav />
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center px-6 pt-24 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
          <ShieldCheck className="h-7 w-7" />
        </span>
        <h1 className="mt-6 font-serif text-4xl font-light tracking-tight sm:text-5xl">
          Verify a certificate
        </h1>
        <p className="mt-4 max-w-md text-lg text-stone-500 dark:text-stone-400">
          Enter the certificate ID or scan its QR code to confirm authenticity and current status.
        </p>
        <div className="mt-10 w-full">
          <VerifySearch />
        </div>
        <p className="mt-6 text-sm text-stone-400">
          Try a sample: <span className="font-mono">CG-9F3A-22K1</span>
        </p>
      </main>
    </div>
  );
}
