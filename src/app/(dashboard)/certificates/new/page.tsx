"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input, Label, Select } from "@/components/ui/input";
import { CertificatePreview } from "@/components/certificate-preview";
import { templates } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";

export default function NewCertificatePage() {
  const [form, setForm] = useState({
    template: templates[0].name,
    recipientName: "Recipient Name",
    recipientEmail: "",
    course: "Advanced React",
    grade: "A",
    date: formatDate(new Date()),
    sendEmail: true,
  });

  function set<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  return (
    <div className="space-y-6">
      <Link
        href="/certificates"
        className="inline-flex items-center gap-1 text-sm text-stone-500 hover:text-stone-900 dark:hover:text-stone-100"
      >
        <ChevronLeft className="h-4 w-4" /> Back to certificates
      </Link>

      <h1 className="font-serif text-3xl font-light tracking-tight">Issue a certificate</h1>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Form */}
        <Card className="p-6">
          <div className="space-y-5">
            <div className="flex flex-col gap-2">
              <Label>Template</Label>
              <Select value={form.template} onChange={(e) => set("template", e.target.value)}>
                {templates.map((t) => (
                  <option key={t.id}>{t.name}</option>
                ))}
              </Select>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label>Recipient name</Label>
                <Input
                  value={form.recipientName}
                  onChange={(e) => set("recipientName", e.target.value)}
                  placeholder="Jane Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Recipient email</Label>
                <Input
                  type="email"
                  value={form.recipientEmail}
                  onChange={(e) => set("recipientEmail", e.target.value)}
                  placeholder="jane@example.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label>Course / achievement</Label>
              <Input value={form.course} onChange={(e) => set("course", e.target.value)} />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label>Grade (optional)</Label>
                <Input value={form.grade} onChange={(e) => set("grade", e.target.value)} />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Issue date</Label>
                <Input value={form.date} onChange={(e) => set("date", e.target.value)} />
              </div>
            </div>

            <label className="flex items-center gap-3 rounded-lg border border-stone-200 p-3.5 dark:border-stone-800">
              <input
                type="checkbox"
                checked={form.sendEmail}
                onChange={(e) => set("sendEmail", e.target.checked)}
                className="h-4 w-4 rounded accent-amber-600"
              />
              <div>
                <p className="text-sm font-medium">Email the certificate to the recipient</p>
                <p className="text-xs text-stone-500">Sends a PDF attachment and verification link.</p>
              </div>
            </label>

            <div className="flex gap-3 pt-2">
              <Button size="md" className="flex-1">
                <Check className="h-4 w-4" /> Issue certificate
              </Button>
              <Button href="/certificates" variant="outline" size="md">
                Cancel
              </Button>
            </div>
          </div>
        </Card>

        {/* Live preview */}
        <div>
          <p className="mb-3 text-sm font-medium text-stone-500">Live preview</p>
          <Card className="p-6">
            <CertificatePreview
              recipientName={form.recipientName || "Recipient Name"}
              course={`for successfully completing ${form.course || "the course"}`}
              date={form.date}
            />
          </Card>
        </div>
      </div>
    </div>
  );
}
