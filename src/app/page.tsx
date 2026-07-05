import Link from "next/link";
import {
  ShieldCheck,
  Palette,
  Zap,
  FileDown,
  Mail,
  BarChart3,
  QrCode,
  Users,
  Check,
  ArrowRight,
  Star,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CertificatePreview } from "@/components/certificate-preview";

const stats = [
  { value: "2.4M+", label: "Certificates issued" },
  { value: "1,200+", label: "Organizations" },
  { value: "34M+", label: "Verifications" },
  { value: "99.9%", label: "Uptime" },
];

const logos = ["NORTHWIND", "Acme Institute", "Coastal University", "TechBridge", "Green Earth", "Nimbus Corp"];

const features = [
  {
    icon: Palette,
    title: "Drag-and-drop designer",
    description:
      "Place dynamic fields, logos, signatures, and QR codes on a live canvas. Fine-tune fonts, colors, and layout — no design skills needed.",
  },
  {
    icon: Zap,
    title: "Bulk generation",
    description:
      "Upload a CSV or Excel file and issue thousands of personalized certificates in seconds, with automatic column mapping.",
  },
  {
    icon: ShieldCheck,
    title: "Instant verification",
    description:
      "Every certificate carries a unique ID and secure QR code. Anyone can verify authenticity on a public page in real time.",
  },
  {
    icon: FileDown,
    title: "Print-ready exports",
    description:
      "Download crisp, high-resolution PDF and PNG files, or export an entire batch as a single ZIP archive.",
  },
  {
    icon: Mail,
    title: "Automated delivery",
    description:
      "Email certificates to recipients the moment they're generated, complete with a verification link and attachment.",
  },
  {
    icon: BarChart3,
    title: "Analytics & audit logs",
    description:
      "Track issuance, verifications, and template usage. Every action is logged for complete accountability.",
  },
];

const steps = [
  {
    number: "01",
    title: "Design your template",
    description: "Start from a professional layout or build your own with the visual editor.",
  },
  {
    number: "02",
    title: "Add recipients",
    description: "Enter details for one person or import a spreadsheet for thousands at once.",
  },
  {
    number: "03",
    title: "Issue, share & verify",
    description: "Generate, email, and let anyone confirm authenticity with a single scan.",
  },
];

const testimonials = [
  {
    quote:
      "We went from spending days on graduation certificates to issuing 4,000 in an afternoon. The verification page ended fraud complaints overnight.",
    name: "Dr. David Okoro",
    role: "Registrar, Coastal University",
  },
  {
    quote:
      "The designer is genuinely delightful, and bulk generation just works. It's now core to how we run every cohort.",
    name: "Sarah Chen",
    role: "Head of Programs, TechBridge Institute",
  },
];

const plans = [
  { name: "Starter", price: "$0", note: "100 certificates / month", features: ["3 templates", "Public verification", "PNG export"] },
  { name: "Pro", price: "$39", note: "per month", features: ["10,000 certificates / month", "Unlimited templates", "Bulk CSV / Excel", "Email delivery"], highlighted: true },
  { name: "Enterprise", price: "Custom", note: "white-label & API", features: ["Unlimited certificates", "Custom domain", "API access", "SSO & audit logs"] },
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-stone-50 text-stone-900 dark:bg-stone-950 dark:text-stone-100">
      {/* ---------- Navbar ---------- */}
      <header className="sticky top-0 z-30 border-b border-stone-200/70 bg-stone-50/80 backdrop-blur-md dark:border-stone-800/70 dark:bg-stone-950/80">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <span className="font-serif text-xl font-semibold tracking-tight">CertiGen</span>
          <div className="hidden items-center gap-8 text-[15px] text-stone-600 md:flex dark:text-stone-400">
            <a href="#features" className="transition hover:text-stone-900 dark:hover:text-white">Features</a>
            <a href="#how" className="transition hover:text-stone-900 dark:hover:text-white">How it works</a>
            <Link href="/pricing" className="transition hover:text-stone-900 dark:hover:text-white">Pricing</Link>
            <Link href="/verify" className="transition hover:text-stone-900 dark:hover:text-white">Verify</Link>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/login"
              className="hidden rounded-full px-4 py-2 text-[15px] font-medium text-stone-600 transition hover:text-stone-900 sm:inline-block dark:text-stone-400 dark:hover:text-white"
            >
              Sign in
            </Link>
            <Button href="/register" size="sm">Get started</Button>
          </div>
        </nav>
      </header>

      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(180,120,40,0.10),transparent_60%)]" />
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 px-6 pt-20 pb-24 lg:grid-cols-2 lg:pt-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-1.5 text-sm text-stone-600 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-400">
              <Sparkles className="h-3.5 w-3.5 text-amber-600" />
              The complete certificate platform
            </span>
            <h1 className="mt-6 font-serif text-5xl leading-[1.05] font-light tracking-tight text-balance sm:text-6xl">
              Issue certificates your recipients are{" "}
              <span className="italic text-amber-700 dark:text-amber-500">proud</span> to share.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-stone-600 dark:text-stone-400">
              Design, generate, deliver, and verify professional certificates at any scale — from a
              single award to fifty thousand, all from one secure dashboard.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/register" size="lg">
                Start free <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/verify" variant="outline" size="lg">
                Verify a certificate
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-stone-500 dark:text-stone-400">
              <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-emerald-600" /> No credit card required</span>
              <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-emerald-600" /> Free forever plan</span>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-linear-to-tr from-amber-200/40 to-transparent blur-2xl dark:from-amber-900/20" />
            <div className="relative rounded-2xl border border-stone-200 bg-white p-3 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.25)] dark:border-stone-800 dark:bg-stone-900">
              <CertificatePreview
                recipientName="Ayesha Rahman"
                course="for successfully completing the Advanced React Program with distinction"
                publicId="CG-9F3A-22K1"
                className="rounded-lg"
              />
            </div>
            {/* Floating verify badge */}
            <div className="absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-xl border border-stone-200 bg-white p-3 pr-4 shadow-lg sm:flex dark:border-stone-800 dark:bg-stone-900">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div className="text-sm">
                <p className="font-medium">Verified authentic</p>
                <p className="text-xs text-stone-400">Scanned 1,284 times</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Logo cloud ---------- */}
      <section className="border-y border-stone-200 bg-white py-10 dark:border-stone-800 dark:bg-stone-900">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="text-center text-xs uppercase tracking-[0.25em] text-stone-400">
            Trusted by teams at leading institutions
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {logos.map((l) => (
              <span key={l} className="font-serif text-lg font-medium tracking-tight text-stone-400 dark:text-stone-500">
                {l}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Stats ---------- */}
      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-serif text-4xl font-light tracking-tight text-stone-900 sm:text-5xl dark:text-stone-100">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-stone-500 dark:text-stone-400">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Features ---------- */}
      <section id="features" className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700 dark:text-amber-500">
            Everything you need
          </p>
          <h2 className="mt-3 font-serif text-4xl leading-tight font-light tracking-tight sm:text-5xl">
            One platform, from first design to public verification.
          </h2>
        </div>
        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title}>
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                <f.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-medium tracking-tight">{f.title}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-stone-600 dark:text-stone-400">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- How it works ---------- */}
      <section id="how" className="border-y border-stone-200 bg-white py-24 dark:border-stone-800 dark:bg-stone-900">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700 dark:text-amber-500">
              How it works
            </p>
            <h2 className="mt-3 font-serif text-4xl font-light tracking-tight sm:text-5xl">
              Live in three simple steps
            </h2>
          </div>
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.number} className="relative">
                {i < steps.length - 1 && (
                  <div className="absolute top-6 left-[calc(50%+2rem)] hidden h-px w-[calc(100%-4rem)] bg-stone-200 md:block dark:bg-stone-800" />
                )}
                <div className="flex flex-col items-center text-center">
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-amber-200 bg-amber-50 font-serif text-lg text-amber-700 dark:border-amber-800/50 dark:bg-amber-900/20 dark:text-amber-400">
                    {i + 1}
                  </span>
                  <h3 className="mt-5 text-xl font-medium tracking-tight">{s.title}</h3>
                  <p className="mt-2 max-w-xs text-[15px] leading-relaxed text-stone-600 dark:text-stone-400">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Verification highlight ---------- */}
      <section className="mx-auto w-full max-w-6xl px-6 py-24">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="mx-auto max-w-sm rounded-2xl border border-stone-200 bg-white p-8 text-center shadow-[0_20px_60px_-20px_rgba(0,0,0,0.2)] dark:border-stone-800 dark:bg-stone-900">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40">
                <ShieldCheck className="h-7 w-7" />
              </span>
              <p className="mt-5 text-sm text-stone-400">Certificate CG-9F3A-22K1</p>
              <p className="mt-1 font-serif text-2xl font-light">Valid & authentic</p>
              <div className="mt-6 flex justify-center">
                <span className="grid h-24 w-24 place-items-center rounded-lg bg-stone-900 text-xs text-white/70">
                  <QrCode className="h-12 w-12" />
                </span>
              </div>
              <p className="mt-6 text-sm text-stone-500 dark:text-stone-400">
                Issued by Vision Academy · July 2026
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700 dark:text-amber-500">
              Trust built in
            </p>
            <h2 className="mt-3 font-serif text-4xl font-light tracking-tight sm:text-5xl">
              Verifiable by anyone, anywhere.
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-stone-600 dark:text-stone-400">
              Each certificate is stamped with a tamper-proof ID and QR code. Recipients, employers, and
              institutions can confirm authenticity instantly — and you can revoke or expire any
              certificate the moment you need to.
            </p>
            <ul className="mt-7 space-y-3">
              {["Unique certificate IDs & secure QR codes", "Real-time revoke and expiry controls", "Public verification page — no login required"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-stone-700 dark:text-stone-300">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  {item}
                </li>
              ))}
            </ul>
            <Button href="/verify" variant="outline" size="md" className="mt-8">
              Try the verification page <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ---------- Testimonials ---------- */}
      <section className="border-y border-stone-200 bg-white py-24 dark:border-stone-800 dark:bg-stone-900">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-2xl border border-stone-200 p-8 dark:border-stone-800">
                <div className="flex gap-1 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-5 font-serif text-xl leading-relaxed font-light text-stone-800 dark:text-stone-200">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-stone-100 text-sm font-semibold text-stone-600 dark:bg-stone-800 dark:text-stone-300">
                    {t.name.split(" ").map((p) => p[0]).join("").slice(0, 2)}
                  </span>
                  <div>
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-xs text-stone-500 dark:text-stone-400">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Pricing preview ---------- */}
      <section className="mx-auto w-full max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700 dark:text-amber-500">
            Pricing
          </p>
          <h2 className="mt-3 font-serif text-4xl font-light tracking-tight sm:text-5xl">
            Start free, scale when you're ready
          </h2>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col rounded-2xl border p-8 ${
                p.highlighted
                  ? "border-amber-400 bg-white ring-1 ring-amber-400 dark:bg-stone-900"
                  : "border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900"
              }`}
            >
              <p className="font-medium">{p.name}</p>
              <div className="mt-3 flex items-baseline gap-1.5">
                <span className="font-serif text-4xl font-light">{p.price}</span>
                <span className="text-sm text-stone-400">{p.note}</span>
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[15px] text-stone-600 dark:text-stone-400">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                href="/register"
                variant={p.highlighted ? "primary" : "outline"}
                size="md"
                className="mt-8 w-full"
              >
                {p.name === "Enterprise" ? "Contact sales" : "Get started"}
              </Button>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-stone-500 dark:text-stone-400">
          See the{" "}
          <Link href="/pricing" className="font-medium text-amber-700 hover:underline dark:text-amber-500">
            full pricing comparison →
          </Link>
        </p>
      </section>

      {/* ---------- Final CTA ---------- */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-stone-900 px-8 py-20 text-center dark:bg-black">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(180,120,40,0.3),transparent_60%)]" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-serif text-4xl leading-tight font-light tracking-tight text-balance text-white sm:text-5xl">
              Ready to issue certificates worth framing?
            </h2>
            <p className="mx-auto mt-5 max-w-md text-lg text-stone-300">
              Join over 1,200 organizations. Get started free — no credit card required.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/register" variant="accent" size="lg">
                Create your account <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href="/pricing"
                size="lg"
                className="border border-stone-700 bg-transparent text-white hover:bg-stone-800"
              >
                View pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="border-t border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-5">
            <div className="md:col-span-2">
              <span className="font-serif text-xl font-semibold tracking-tight">CertiGen</span>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-stone-500 dark:text-stone-400">
                The complete platform to design, issue, and verify professional certificates at scale.
              </p>
            </div>
            {[
              { title: "Product", links: ["Features", "Pricing", "Verify", "Templates"] },
              { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
              { title: "Legal", links: ["Privacy", "Terms", "Security", "Status"] },
            ].map((col) => (
              <div key={col.title}>
                <p className="text-sm font-semibold text-stone-900 dark:text-stone-100">{col.title}</p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-sm text-stone-500 transition hover:text-stone-900 dark:text-stone-400 dark:hover:text-white">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-stone-200 pt-8 text-sm text-stone-500 sm:flex-row dark:border-stone-800">
            <span>© 2026 CertiGen. All rights reserved.</span>
            <span className="flex items-center gap-1.5">
              <Users className="h-4 w-4" /> Built for teams that value trust.
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
