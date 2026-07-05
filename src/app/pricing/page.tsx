import { Check } from "lucide-react";
import { PublicNav } from "@/components/public-nav";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { plans } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const faqs = [
  { q: "Can I try before paying?", a: "Yes — the Starter plan is free forever, and Pro includes a 14-day free trial." },
  { q: "What happens if I exceed my limit?", a: "We'll notify you before you hit your cap. You can upgrade any time without losing data." },
  { q: "Do you offer white-label?", a: "Enterprise includes white-label branding, a custom domain, and API access." },
  { q: "Can I cancel anytime?", a: "Absolutely. Cancel with one click; your plan stays active until the end of the cycle." },
];

export default function PricingPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-stone-50 text-stone-900 dark:bg-stone-950 dark:text-stone-100">
      <PublicNav />
      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-20">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-light tracking-tight sm:text-6xl">
            Simple, honest pricing
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-stone-500 dark:text-stone-400">
            Start free. Upgrade when you grow. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={cn(
                "relative flex flex-col rounded-2xl border bg-white p-8 dark:bg-stone-900",
                p.highlighted
                  ? "border-amber-400 shadow-[0_20px_60px_-20px_rgba(180,83,9,0.4)] ring-1 ring-amber-400"
                  : "border-stone-200 dark:border-stone-800",
              )}
            >
              {p.highlighted && (
                <Badge variant="warning" className="absolute -top-3 left-1/2 -translate-x-1/2">
                  Most popular
                </Badge>
              )}
              <p className="font-medium">{p.name}</p>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-serif text-5xl font-light">
                  {p.price === null ? "Custom" : `$${p.price}`}
                </span>
                {p.price !== null && p.price > 0 && <span className="text-stone-400">/mo</span>}
              </div>
              <p className="mt-2 text-sm text-stone-500">{p.tagline}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-stone-600 dark:text-stone-400">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                href={p.price === null ? "#" : "/register"}
                variant={p.highlighted ? "primary" : "outline"}
                size="md"
                className="mt-8 w-full"
              >
                {p.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mx-auto mt-24 max-w-2xl">
          <h2 className="text-center font-serif text-3xl font-light tracking-tight">
            Frequently asked
          </h2>
          <div className="mt-10 divide-y divide-stone-200 dark:divide-stone-800">
            {faqs.map((f) => (
              <div key={f.q} className="py-6">
                <h3 className="font-medium">{f.q}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-stone-500 dark:text-stone-400">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
