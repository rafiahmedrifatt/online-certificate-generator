import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/input";

export default function RegisterPage() {
  return (
    <div>
      <h1 className="font-serif text-3xl font-light tracking-tight">Create your organization</h1>
      <p className="mt-2 text-[15px] text-stone-500 dark:text-stone-400">
        Start issuing certificates in minutes.
      </p>

      <form className="mt-8 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <Label htmlFor="org">Organization name</Label>
          <Input id="org" placeholder="Vision Academy" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Your name</Label>
          <Input id="name" placeholder="Rafi Ahmed" autoComplete="name" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Work email</Label>
          <Input id="email" type="email" placeholder="you@company.com" autoComplete="email" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="At least 8 characters" autoComplete="new-password" />
        </div>
        <Button href="/dashboard" size="md" className="mt-1 w-full">
          Create account
        </Button>
      </form>

      <p className="mt-6 text-center text-xs leading-relaxed text-stone-400">
        By creating an account you agree to our Terms of Service and Privacy Policy.
      </p>

      <p className="mt-6 text-center text-sm text-stone-500 dark:text-stone-400">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-stone-900 hover:underline dark:text-stone-100">
          Sign in
        </Link>
      </p>
    </div>
  );
}
