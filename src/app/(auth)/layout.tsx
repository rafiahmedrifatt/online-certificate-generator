import Link from "next/link";
import { CertificatePreview } from "@/components/certificate-preview";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full flex-1 bg-stone-50 text-stone-900 dark:bg-stone-950 dark:text-stone-100">
      {/* Form side */}
      <div className="flex w-full flex-col px-6 py-8 lg:w-1/2">
        <Link href="/" className="font-serif text-xl font-semibold tracking-tight">
          CertiGen
        </Link>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-sm py-12">{children}</div>
        </div>
      </div>

      {/* Showcase side */}
      <div className="relative hidden items-center justify-center overflow-hidden bg-stone-900 p-16 lg:flex lg:w-1/2 dark:bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(180,120,40,0.25),transparent_55%)]" />
        <div className="relative z-10 w-full max-w-md">
          <CertificatePreview
            recipientName="Ayesha Rahman"
            course="for completing the Advanced React program with distinction"
            publicId="CG-9F3A-22K1"
            className="rounded-sm"
          />
          <p className="mt-10 text-center font-serif text-2xl font-light italic text-stone-200">
            Certificates worth framing.
          </p>
          <p className="mt-3 text-center text-sm text-stone-400">
            Design, issue, and verify professional certificates at any scale.
          </p>
        </div>
      </div>
    </div>
  );
}
