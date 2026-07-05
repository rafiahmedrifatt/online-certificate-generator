import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <div>
      <h1 className="font-serif text-3xl font-light tracking-tight">Welcome back</h1>
      <p className="mt-2 text-[15px] text-stone-500 dark:text-stone-400">
        Sign in to your organization dashboard.
      </p>

      <form className="mt-8 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@company.com" autoComplete="email" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <Link href="#" className="text-sm text-amber-700 hover:underline dark:text-amber-500">
              Forgot?
            </Link>
          </div>
          <Input id="password" type="password" placeholder="••••••••" autoComplete="current-password" />
        </div>
        <Button href="/dashboard" size="md" className="mt-1 w-full">
          Sign in
        </Button>
      </form>

      <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-wider text-stone-400">
        <div className="h-px flex-1 bg-stone-200 dark:bg-stone-800" />
        or
        <div className="h-px flex-1 bg-stone-200 dark:bg-stone-800" />
      </div>

      <Button variant="outline" size="md" className="w-full">
        Continue with Google
      </Button>

      <p className="mt-8 text-center text-sm text-stone-500 dark:text-stone-400">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="font-medium text-stone-900 hover:underline dark:text-stone-100">
          Create one
        </Link>
      </p>
    </div>
  );
}
