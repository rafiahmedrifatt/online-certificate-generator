import Link from "next/link";
import { Button } from "@/components/ui/button";

export function PublicNav() {
  return (
    <header className="sticky top-0 z-10 border-b border-stone-200/70 bg-stone-50/80 backdrop-blur-md dark:border-stone-800/70 dark:bg-stone-950/80">
      <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-5">
        <Link href="/" className="font-serif text-xl font-semibold tracking-tight">
          CertiGen
        </Link>
        <div className="flex items-center gap-6 text-[15px] text-stone-600 dark:text-stone-400">
          <Link href="/pricing" className="hidden transition hover:text-stone-900 sm:inline dark:hover:text-white">
            Pricing
          </Link>
          <Link href="/verify" className="hidden transition hover:text-stone-900 sm:inline dark:hover:text-white">
            Verify
          </Link>
          <Link href="/login" className="transition hover:text-stone-900 dark:hover:text-white">
            Sign in
          </Link>
          <Button href="/register" size="sm">
            Get started
          </Button>
        </div>
      </nav>
    </header>
  );
}
