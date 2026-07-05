import Link from "next/link";

const features = [
  {
    title: "Elegant templates",
    description:
      "A curated set of refined certificate designs — for courses, events, and awards.",
  },
  {
    title: "Effortless editing",
    description:
      "Change names, colors, and logos with a live preview. No design skills needed.",
  },
  {
    title: "Bulk in one click",
    description:
      "Upload a list of recipients and generate hundreds of certificates instantly.",
  },
  {
    title: "Print-ready export",
    description:
      "Download crisp, high-resolution PDF and PNG files ready to share or print.",
  },
];

const steps = [
  { number: "01", label: "Choose a template" },
  { number: "02", label: "Add your details" },
  { number: "03", label: "Download & share" },
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-stone-50 text-stone-900 dark:bg-stone-950 dark:text-stone-100">
      {/* Navbar */}
      <header className="sticky top-0 z-10 border-b border-stone-200/70 bg-stone-50/80 backdrop-blur-md dark:border-stone-800/70 dark:bg-stone-950/80">
        <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-5">
          <span className="font-serif text-xl font-semibold tracking-tight">
            CertiGen
          </span>
          <div className="flex items-center gap-8 text-[15px] text-stone-600 dark:text-stone-400">
            <a href="#features" className="hidden transition hover:text-stone-900 sm:inline dark:hover:text-white">
              Features
            </a>
            <a href="#how" className="hidden transition hover:text-stone-900 sm:inline dark:hover:text-white">
              How it works
            </a>
            <Link
              href="/login"
              className="hidden transition hover:text-stone-900 sm:inline dark:hover:text-white"
            >
              Sign in
            </Link>
            <Link
              href="/register"
              className="rounded-full bg-stone-900 px-5 py-2.5 font-medium text-white transition hover:bg-stone-700 dark:bg-white dark:text-stone-900 dark:hover:bg-stone-200"
            >
              Get started
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto flex w-full max-w-5xl flex-col items-center px-6 pt-24 pb-20 text-center sm:pt-32">
        <span className="mb-8 rounded-full border border-stone-200 bg-white px-4 py-1.5 text-sm text-stone-500 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-400">
          Beautiful certificates, effortlessly
        </span>
        <h1 className="font-serif text-5xl leading-[1.05] font-light tracking-tight text-balance sm:text-7xl">
          Create certificates
          <br />
          worth <span className="italic text-amber-700 dark:text-amber-500">framing</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-stone-600 sm:text-xl dark:text-stone-400">
          Design, personalize, and download professional certificates for your
          courses, events, and achievements — right in your browser.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/register"
            className="rounded-full bg-stone-900 px-8 py-4 text-base font-medium text-white transition hover:bg-stone-700 dark:bg-white dark:text-stone-900 dark:hover:bg-stone-200"
          >
            Create a certificate
          </Link>
          <a
            href="#features"
            className="rounded-full border border-stone-300 px-8 py-4 text-base font-medium text-stone-700 transition hover:border-stone-400 hover:bg-white dark:border-stone-700 dark:text-stone-300 dark:hover:bg-stone-900"
          >
            Explore features
          </a>
        </div>

        {/* Certificate preview */}
        <div className="mt-20 w-full max-w-2xl rounded-sm border border-stone-200 bg-white p-12 text-center shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] sm:p-16 dark:border-stone-800 dark:bg-stone-900">
          <div className="mx-auto flex flex-col items-center border border-amber-300/60 p-10 dark:border-amber-700/40">
            <p className="text-xs uppercase tracking-[0.35em] text-amber-700 dark:text-amber-500">
              Certificate of Achievement
            </p>
            <p className="mt-8 text-sm text-stone-400">Presented to</p>
            <p className="mt-3 font-serif text-4xl font-light italic text-stone-900 dark:text-stone-100">
              Your Name
            </p>
            <div className="mt-6 h-px w-24 bg-amber-400/70" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-stone-400">
              for outstanding performance and dedication
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto w-full max-w-5xl px-6 py-24">
        <h2 className="max-w-lg font-serif text-4xl leading-tight font-light tracking-tight sm:text-5xl">
          Everything you need,
          <br />
          <span className="text-stone-400">nothing you don&apos;t.</span>
        </h2>
        <div className="mt-16 grid gap-x-12 gap-y-14 sm:grid-cols-2">
          {features.map((f, i) => (
            <div key={f.title} className="border-t border-stone-200 pt-6 dark:border-stone-800">
              <span className="font-serif text-sm text-amber-700 dark:text-amber-500">
                0{i + 1}
              </span>
              <h3 className="mt-4 text-2xl font-medium tracking-tight">{f.title}</h3>
              <p className="mt-3 text-[17px] leading-relaxed text-stone-600 dark:text-stone-400">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-y border-stone-200 bg-white py-24 dark:border-stone-800 dark:bg-stone-900">
        <div className="mx-auto w-full max-w-5xl px-6">
          <h2 className="text-center font-serif text-4xl font-light tracking-tight sm:text-5xl">
            Three simple steps
          </h2>
          <div className="mt-16 grid gap-12 sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.number} className="text-center">
                <p className="font-serif text-5xl font-light text-amber-700 dark:text-amber-500">
                  {s.number}
                </p>
                <p className="mt-5 text-xl font-medium tracking-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-5xl px-6 py-28 text-center">
        <h2 className="mx-auto max-w-2xl font-serif text-4xl leading-tight font-light tracking-tight text-balance sm:text-6xl">
          Ready to create your first certificate?
        </h2>
        <p className="mx-auto mt-6 max-w-md text-lg text-stone-600 dark:text-stone-400">
          It&apos;s free, fast, and requires no sign-up.
        </p>
        <Link
          href="/register"
          className="mt-10 inline-block rounded-full bg-stone-900 px-10 py-4 text-base font-medium text-white transition hover:bg-stone-700 dark:bg-white dark:text-stone-900 dark:hover:bg-stone-200"
        >
          Get started for free
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200 py-10 dark:border-stone-800">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-3 px-6 text-sm text-stone-500 sm:flex-row">
          <span className="font-serif text-base text-stone-700 dark:text-stone-300">
            CertiGen
          </span>
          <span>© 2026 CertiGen. All rights reserved.</span>
        </div>
      </footer>
    </main>
  );
}
