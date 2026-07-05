import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ChevronLeft,
  Download,
  Mail,
  Ban,
  ExternalLink,
  Copy,
  RefreshCw,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CertificatePreview } from "@/components/certificate-preview";
import { certificates, statusVariant } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";

export default async function CertificateDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const cert = certificates.find((c) => c.id === id);
  if (!cert) notFound();

  const meta = [
    { label: "Certificate ID", value: cert.publicId, mono: true },
    { label: "Recipient", value: cert.recipientName },
    { label: "Email", value: cert.recipientEmail },
    { label: "Course", value: cert.course },
    { label: "Template", value: cert.template },
    { label: "Grade", value: cert.grade ?? "—" },
    { label: "Issued", value: formatDate(cert.issuedAt) },
    { label: "Expires", value: cert.expiresAt ? formatDate(cert.expiresAt) : "Never" },
  ];

  return (
    <div className="space-y-6">
      <Link
        href="/certificates"
        className="inline-flex items-center gap-1 text-sm text-stone-500 hover:text-stone-900 dark:hover:text-stone-100"
      >
        <ChevronLeft className="h-4 w-4" /> Back to certificates
      </Link>

      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="font-serif text-3xl font-light tracking-tight">{cert.recipientName}</h1>
            <Badge variant={statusVariant[cert.status]}>{cert.status}</Badge>
          </div>
          <p className="mt-1 text-[15px] text-stone-500 dark:text-stone-400">{cert.course}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" size="sm">
            <Mail className="h-4 w-4" /> Email
          </Button>
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4" /> Regenerate
          </Button>
          <Button size="sm">
            <Download className="h-4 w-4" /> Download PDF
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Preview */}
        <div className="lg:col-span-2">
          <Card className="overflow-hidden p-6">
            <CertificatePreview
              recipientName={cert.recipientName}
              course={`for successfully completing ${cert.course}`}
              date={formatDate(cert.issuedAt)}
              publicId={cert.publicId}
            />
            <div className="mt-4 flex flex-wrap gap-2">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4" /> PDF
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4" /> PNG
              </Button>
            </div>
          </Card>
        </div>

        {/* Details */}
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-400">Details</h3>
            <dl className="mt-4 space-y-3">
              {meta.map((m) => (
                <div key={m.label} className="flex items-baseline justify-between gap-4">
                  <dt className="text-sm text-stone-500">{m.label}</dt>
                  <dd className={`text-sm text-stone-900 dark:text-stone-100 ${m.mono ? "font-mono text-xs" : ""}`}>
                    {m.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Card>

          <Card className="p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-400">Verification</h3>
            <p className="mt-3 text-sm text-stone-500">Public verification link</p>
            <div className="mt-2 flex items-center gap-2 rounded-lg border border-stone-200 bg-stone-50 p-2 dark:border-stone-800 dark:bg-stone-950">
              <code className="flex-1 truncate text-xs text-stone-600 dark:text-stone-400">
                certigen.app/verify/{cert.publicId}
              </code>
              <button className="grid h-7 w-7 shrink-0 place-items-center rounded text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800">
                <Copy className="h-3.5 w-3.5" />
              </button>
            </div>
            <Button href={`/verify/${cert.publicId}`} variant="outline" size="sm" className="mt-3 w-full">
              <ExternalLink className="h-4 w-4" /> Open verification page
            </Button>
          </Card>

          {cert.status === "issued" && (
            <Card className="border-red-200 p-6 dark:border-red-900/40">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-red-500">Danger zone</h3>
              <p className="mt-2 text-sm text-stone-500">
                Revoking marks this certificate invalid on the public verification page. This cannot be undone.
              </p>
              <Button variant="danger" size="sm" className="mt-4">
                <Ban className="h-4 w-4" /> Revoke certificate
              </Button>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
