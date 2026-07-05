import Link from "next/link";
import { CheckCircle2, XCircle, AlertTriangle, ArrowLeft } from "lucide-react";
import { PublicNav } from "@/components/public-nav";
import { Card } from "@/components/ui/card";
import { CertificatePreview } from "@/components/certificate-preview";
import { findCertificate, org } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";

export default async function VerifyResultPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  const cert = findCertificate(decodeURIComponent(code));

  const valid = cert?.status === "issued";

  return (
    <div className="flex min-h-full flex-1 flex-col bg-stone-50 text-stone-900 dark:bg-stone-950 dark:text-stone-100">
      <PublicNav />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-12">
        <Link
          href="/verify"
          className="inline-flex items-center gap-1 text-sm text-stone-500 hover:text-stone-900 dark:hover:text-stone-100"
        >
          <ArrowLeft className="h-4 w-4" /> Verify another
        </Link>

        {/* Status banner */}
        <div className="mt-6">
          {!cert ? (
            <StatusBanner
              tone="danger"
              icon={<XCircle className="h-6 w-6" />}
              title="Certificate not found"
              message={`No certificate matches the ID "${decodeURIComponent(code)}". Check the ID and try again.`}
            />
          ) : valid ? (
            <StatusBanner
              tone="success"
              icon={<CheckCircle2 className="h-6 w-6" />}
              title="Valid certificate"
              message={`This certificate was issued by ${org.name} and is currently valid.`}
            />
          ) : (
            <StatusBanner
              tone="warning"
              icon={<AlertTriangle className="h-6 w-6" />}
              title={`Certificate ${cert.status}`}
              message={
                cert.status === "revoked"
                  ? "This certificate has been revoked by the issuing organization and is no longer valid."
                  : "This certificate has expired and is no longer valid."
              }
            />
          )}
        </div>

        {cert && (
          <div className="mt-8 grid gap-8 lg:grid-cols-5">
            <Card className="overflow-hidden p-5 lg:col-span-3">
              <CertificatePreview
                recipientName={cert.recipientName}
                course={`for successfully completing ${cert.course}`}
                date={formatDate(cert.issuedAt)}
                publicId={cert.publicId}
              />
            </Card>
            <div className="lg:col-span-2">
              <Card className="p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-400">
                  Certificate details
                </h3>
                <dl className="mt-4 space-y-3 text-sm">
                  <Row label="Certificate ID" value={cert.publicId} mono />
                  <Row label="Recipient" value={cert.recipientName} />
                  <Row label="Course" value={cert.course} />
                  <Row label="Issued by" value={org.name} />
                  <Row label="Issue date" value={formatDate(cert.issuedAt)} />
                  {cert.grade && <Row label="Grade" value={cert.grade} />}
                  <Row label="Status" value={cert.status} />
                </dl>
              </Card>
              <p className="mt-4 text-center text-xs text-stone-400">
                Verified via CertiGen · {formatDate(new Date())}
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

function StatusBanner({
  tone,
  icon,
  title,
  message,
}: {
  tone: "success" | "danger" | "warning";
  icon: React.ReactNode;
  title: string;
  message: string;
}) {
  const styles = {
    success: "border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-900/40 dark:bg-emerald-900/15 dark:text-emerald-300",
    danger: "border-red-200 bg-red-50 text-red-800 dark:border-red-900/40 dark:bg-red-900/15 dark:text-red-300",
    warning: "border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-900/40 dark:bg-amber-900/15 dark:text-amber-300",
  }[tone];

  return (
    <div className={`flex items-start gap-4 rounded-xl border p-5 ${styles}`}>
      <span className="shrink-0">{icon}</span>
      <div>
        <p className="font-medium">{title}</p>
        <p className="mt-0.5 text-sm opacity-90">{message}</p>
      </div>
    </div>
  );
}

function Row({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <dt className="text-stone-500">{label}</dt>
      <dd className={`text-right text-stone-900 dark:text-stone-100 ${mono ? "font-mono text-xs" : ""}`}>
        {value}
      </dd>
    </div>
  );
}
