"use client";

import { useState } from "react";
import {
  UploadCloud,
  FileSpreadsheet,
  ArrowRight,
  ArrowLeft,
  Check,
  Download,
  Loader2,
} from "lucide-react";
import { PageHeader } from "@/components/dashboard/page-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/input";
import { Table, THead, TBody, TR, TH, TD } from "@/components/ui/table";
import { templates } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const steps = ["Upload", "Map columns", "Review", "Generate"];

// Mock parsed CSV
const csvColumns = ["Full Name", "Email Address", "Program", "Result", "Completion Date"];
const templateFields = [
  { key: "recipientName", label: "Recipient name", required: true },
  { key: "recipientEmail", label: "Recipient email", required: true },
  { key: "course", label: "Course", required: true },
  { key: "grade", label: "Grade", required: false },
  { key: "issueDate", label: "Issue date", required: false },
];
const sampleRows = [
  ["Ayesha Rahman", "ayesha@example.com", "Advanced React", "A", "2026-07-01"],
  ["Tanvir Hasan", "tanvir@example.com", "UX Fundamentals", "A-", "2026-07-01"],
  ["Nadia Islam", "nadia@example.com", "Data Science", "B+", "2026-07-01"],
];

export default function BulkPage() {
  const [step, setStep] = useState(0);
  const [uploaded, setUploaded] = useState(false);
  const [mapping, setMapping] = useState<Record<string, string>>({
    recipientName: "Full Name",
    recipientEmail: "Email Address",
    course: "Program",
    grade: "Result",
    issueDate: "Completion Date",
  });
  const [progress, setProgress] = useState(0);
  const total = 240;

  function runGeneration() {
    setStep(3);
    setProgress(0);
    let p = 0;
    const timer = setInterval(() => {
      p += Math.random() * 12 + 4;
      if (p >= 100) {
        p = 100;
        clearInterval(timer);
      }
      setProgress(Math.round(p));
    }, 250);
  }

  return (
    <div className="space-y-8">
      <PageHeader
        title="Bulk generate"
        description="Upload a CSV or Excel file and issue hundreds of certificates at once."
      />

      {/* Stepper */}
      <div className="flex items-center">
        {steps.map((s, i) => (
          <div key={s} className="flex flex-1 items-center last:flex-none">
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  "grid h-8 w-8 place-items-center rounded-full text-sm font-medium transition",
                  i < step
                    ? "bg-emerald-600 text-white"
                    : i === step
                      ? "bg-stone-900 text-white dark:bg-white dark:text-stone-900"
                      : "bg-stone-200 text-stone-500 dark:bg-stone-800",
                )}
              >
                {i < step ? <Check className="h-4 w-4" /> : i + 1}
              </span>
              <span className={cn("text-sm font-medium", i <= step ? "text-stone-900 dark:text-stone-100" : "text-stone-400")}>
                {s}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className={cn("mx-3 h-px flex-1", i < step ? "bg-emerald-500" : "bg-stone-200 dark:bg-stone-800")} />
            )}
          </div>
        ))}
      </div>

      {/* Step 1: Upload */}
      {step === 0 && (
        <Card className="p-6">
          <div className="mb-5 flex flex-col gap-2">
            <label className="text-sm font-medium">Template</label>
            <Select className="max-w-sm">
              {templates.map((t) => (
                <option key={t.id}>{t.name}</option>
              ))}
            </Select>
          </div>
          <button
            onClick={() => setUploaded(true)}
            className={cn(
              "flex w-full flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed p-12 text-center transition",
              uploaded
                ? "border-emerald-400 bg-emerald-50/50 dark:bg-emerald-900/10"
                : "border-stone-300 hover:border-amber-400 hover:bg-amber-50/40 dark:border-stone-700 dark:hover:bg-amber-900/10",
            )}
          >
            {uploaded ? (
              <>
                <span className="grid h-12 w-12 place-items-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40">
                  <FileSpreadsheet className="h-6 w-6" />
                </span>
                <p className="font-medium">recipients.csv</p>
                <p className="text-sm text-stone-500">240 rows detected · 5 columns</p>
              </>
            ) : (
              <>
                <span className="grid h-12 w-12 place-items-center rounded-full bg-stone-100 text-stone-500 dark:bg-stone-800">
                  <UploadCloud className="h-6 w-6" />
                </span>
                <p className="font-medium">Drop your CSV or Excel file here</p>
                <p className="text-sm text-stone-500">or click to browse · .csv, .xlsx up to 10MB</p>
              </>
            )}
          </button>
          <div className="mt-6 flex justify-end">
            <Button size="md" disabled={!uploaded} onClick={() => setStep(1)}>
              Continue <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      )}

      {/* Step 2: Map columns */}
      {step === 1 && (
        <Card className="p-6">
          <h3 className="text-lg font-medium tracking-tight">Map columns to template fields</h3>
          <p className="mt-1 text-sm text-stone-500">
            We matched your columns automatically — adjust any that look wrong.
          </p>
          <div className="mt-6 space-y-3">
            {templateFields.map((field) => (
              <div key={field.key} className="flex items-center gap-4">
                <div className="w-48 shrink-0">
                  <p className="text-sm font-medium">
                    {field.label}
                    {field.required && <span className="text-red-500"> *</span>}
                  </p>
                  <p className="font-mono text-xs text-stone-400">{`{{${field.key}}}`}</p>
                </div>
                <ArrowLeft className="h-4 w-4 shrink-0 text-stone-300" />
                <Select
                  value={mapping[field.key] ?? ""}
                  onChange={(e) => setMapping((m) => ({ ...m, [field.key]: e.target.value }))}
                  className="max-w-xs"
                >
                  <option value="">— Not mapped —</option>
                  {csvColumns.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </Select>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-between">
            <Button variant="outline" size="md" onClick={() => setStep(0)}>
              <ArrowLeft className="h-4 w-4" /> Back
            </Button>
            <Button size="md" onClick={() => setStep(2)}>
              Review <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      )}

      {/* Step 3: Review */}
      {step === 2 && (
        <Card className="overflow-hidden">
          <div className="border-b border-stone-200 p-6 dark:border-stone-800">
            <h3 className="text-lg font-medium tracking-tight">Review before generating</h3>
            <p className="mt-1 text-sm text-stone-500">
              Previewing the first 3 of <strong>240</strong> rows. All required fields are mapped.
            </p>
          </div>
          <Table>
            <THead>
              <tr>
                {templateFields.map((f) => (
                  <TH key={f.key}>{f.label}</TH>
                ))}
              </tr>
            </THead>
            <TBody>
              {sampleRows.map((row, i) => (
                <TR key={i}>
                  {row.map((cell, j) => (
                    <TD key={j}>{cell}</TD>
                  ))}
                </TR>
              ))}
            </TBody>
          </Table>
          <div className="flex justify-between border-t border-stone-200 p-6 dark:border-stone-800">
            <Button variant="outline" size="md" onClick={() => setStep(1)}>
              <ArrowLeft className="h-4 w-4" /> Back
            </Button>
            <Button size="md" onClick={runGeneration}>
              Generate 240 certificates <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      )}

      {/* Step 4: Generate */}
      {step === 3 && (
        <Card className="p-8 text-center">
          {progress < 100 ? (
            <>
              <Loader2 className="mx-auto h-10 w-10 animate-spin text-amber-600" />
              <h3 className="mt-4 text-lg font-medium">Generating certificates…</h3>
              <p className="mt-1 text-sm text-stone-500">
                {Math.round((progress / 100) * total)} of {total} generated
              </p>
            </>
          ) : (
            <>
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40">
                <Check className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-medium">All 240 certificates generated</h3>
              <p className="mt-1 text-sm text-stone-500">Emails have been queued for delivery.</p>
            </>
          )}

          <div className="mx-auto mt-6 max-w-md">
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-stone-200 dark:bg-stone-800">
              <div
                className="h-full rounded-full bg-amber-500 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="mt-2 text-sm text-stone-500">{progress}%</p>
          </div>

          {progress >= 100 && (
            <div className="mt-6 flex justify-center gap-3">
              <Button variant="outline" size="md">
                <Download className="h-4 w-4" /> Download ZIP
              </Button>
              <Button href="/certificates" size="md">
                View certificates
              </Button>
            </div>
          )}
        </Card>
      )}
    </div>
  );
}
