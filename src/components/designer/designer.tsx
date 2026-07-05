"use client";

import { useRef, useState } from "react";
import {
  Type,
  User,
  BookOpen,
  Calendar,
  Award,
  QrCode,
  Hash,
  PenTool,
  Image as ImageIcon,
  Trash2,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Save,
  Eye,
  ChevronLeft,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type Align = "left" | "center" | "right";
type Field = {
  id: string;
  kind: string;
  label: string;
  text: string;
  x: number; // percentage
  y: number;
  fontSize: number;
  color: string;
  align: Align;
  bold: boolean;
  italic: boolean;
};

const palette = [
  { kind: "text", label: "Text", icon: Type, sample: "Custom text" },
  { kind: "recipient", label: "Recipient", icon: User, sample: "{{recipientName}}" },
  { kind: "course", label: "Course", icon: BookOpen, sample: "{{course}}" },
  { kind: "date", label: "Date", icon: Calendar, sample: "{{issueDate}}" },
  { kind: "grade", label: "Grade", icon: Award, sample: "{{grade}}" },
  { kind: "certId", label: "Certificate ID", icon: Hash, sample: "{{certificateId}}" },
  { kind: "qr", label: "QR code", icon: QrCode, sample: "QR" },
  { kind: "signature", label: "Signature", icon: PenTool, sample: "{{signatory}}" },
  { kind: "logo", label: "Logo", icon: ImageIcon, sample: "LOGO" },
];

let counter = 0;

const initialFields: Field[] = [
  { id: "f1", kind: "text", label: "Title", text: "Certificate of Achievement", x: 50, y: 18, fontSize: 22, color: "#b45309", align: "center", bold: true, italic: false },
  { id: "f2", kind: "text", label: "Subtitle", text: "This is proudly presented to", x: 50, y: 34, fontSize: 13, color: "#78716c", align: "center", bold: false, italic: false },
  { id: "f3", kind: "recipient", label: "Recipient", text: "{{recipientName}}", x: 50, y: 46, fontSize: 40, color: "#1c1917", align: "center", bold: false, italic: true },
  { id: "f4", kind: "course", label: "Course", text: "{{course}}", x: 50, y: 62, fontSize: 15, color: "#57534e", align: "center", bold: false, italic: false },
  { id: "f5", kind: "date", label: "Date", text: "{{issueDate}}", x: 25, y: 82, fontSize: 12, color: "#57534e", align: "center", bold: false, italic: false },
  { id: "f6", kind: "qr", label: "QR code", text: "QR", x: 50, y: 82, fontSize: 12, color: "#1c1917", align: "center", bold: false, italic: false },
  { id: "f7", kind: "signature", label: "Signature", text: "{{signatory}}", x: 75, y: 82, fontSize: 14, color: "#57534e", align: "center", bold: false, italic: true },
];

export function Designer({ templateId }: { templateId: string }) {
  const isNew = templateId === "new";
  const [name, setName] = useState(isNew ? "Untitled template" : "Course Completion");
  const [fields, setFields] = useState<Field[]>(initialFields);
  const [selectedId, setSelectedId] = useState<string | null>("f3");
  const canvasRef = useRef<HTMLDivElement>(null);
  const drag = useRef<{ id: string; dx: number; dy: number } | null>(null);

  const selected = fields.find((f) => f.id === selectedId) ?? null;

  function update(id: string, patch: Partial<Field>) {
    setFields((fs) => fs.map((f) => (f.id === id ? { ...f, ...patch } : f)));
  }

  function addField(kind: string, label: string, sample: string) {
    counter += 1;
    const nf: Field = {
      id: `n${counter}`,
      kind,
      label,
      text: sample,
      x: 50,
      y: 50,
      fontSize: kind === "qr" || kind === "logo" ? 12 : 16,
      color: "#1c1917",
      align: "center",
      bold: false,
      italic: false,
    };
    setFields((fs) => [...fs, nf]);
    setSelectedId(nf.id);
  }

  function onPointerDown(e: React.PointerEvent, id: string) {
    e.stopPropagation();
    setSelectedId(id);
    const rect = canvasRef.current!.getBoundingClientRect();
    const field = fields.find((f) => f.id === id)!;
    const fx = (field.x / 100) * rect.width;
    const fy = (field.y / 100) * rect.height;
    drag.current = { id, dx: e.clientX - rect.left - fx, dy: e.clientY - rect.top - fy };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }

  function onPointerMove(e: React.PointerEvent) {
    if (!drag.current) return;
    const rect = canvasRef.current!.getBoundingClientRect();
    const x = ((e.clientX - rect.left - drag.current.dx) / rect.width) * 100;
    const y = ((e.clientY - rect.top - drag.current.dy) / rect.height) * 100;
    update(drag.current.id, {
      x: Math.min(98, Math.max(2, x)),
      y: Math.min(98, Math.max(2, y)),
    });
  }

  function onPointerUp() {
    drag.current = null;
  }

  return (
    <div className="fixed inset-0 z-50 flex h-screen flex-col bg-stone-100 text-stone-900 dark:bg-stone-950 dark:text-stone-100">
      {/* Toolbar */}
      <header className="flex h-14 shrink-0 items-center gap-3 border-b border-stone-200 bg-white px-4 dark:border-stone-800 dark:bg-stone-900">
        <Link href="/templates" className="grid h-9 w-9 place-items-center rounded-lg text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-800">
          <ChevronLeft className="h-5 w-5" />
        </Link>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-lg border border-transparent bg-transparent px-2 py-1 text-sm font-medium hover:border-stone-200 focus:border-stone-300 focus:outline-none dark:hover:border-stone-700"
        />
        <div className="ml-auto flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Eye className="h-4 w-4" /> Preview
          </Button>
          <Button size="sm">
            <Save className="h-4 w-4" /> Save template
          </Button>
        </div>
      </header>

      <div className="flex min-h-0 flex-1">
        {/* Field palette */}
        <aside className="w-56 shrink-0 overflow-y-auto border-r border-stone-200 bg-white p-3 dark:border-stone-800 dark:bg-stone-900">
          <p className="px-2 pb-2 text-[11px] font-semibold uppercase tracking-wider text-stone-400">
            Add field
          </p>
          <div className="grid grid-cols-2 gap-2">
            {palette.map((p) => (
              <button
                key={p.kind}
                onClick={() => addField(p.kind, p.label, p.sample)}
                className="flex flex-col items-center gap-1.5 rounded-lg border border-stone-200 p-3 text-xs text-stone-600 transition hover:border-amber-300 hover:bg-amber-50 hover:text-amber-800 dark:border-stone-800 dark:text-stone-400 dark:hover:bg-amber-900/20"
              >
                <p.icon className="h-4 w-4" />
                {p.label}
              </button>
            ))}
          </div>
        </aside>

        {/* Canvas */}
        <div className="flex min-w-0 flex-1 items-center justify-center overflow-auto p-8">
          <div className="w-full max-w-3xl">
            <div
              ref={canvasRef}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onClick={() => setSelectedId(null)}
              className="relative aspect-[1.414/1] w-full select-none bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)]"
            >
              {/* decorative border */}
              <div className="pointer-events-none absolute inset-[3%] border-2 border-amber-300/70" />
              {fields.map((f) => {
                const isSel = f.id === selectedId;
                const isBox = f.kind === "qr" || f.kind === "logo";
                return (
                  <div
                    key={f.id}
                    onPointerDown={(e) => onPointerDown(e, f.id)}
                    className={cn(
                      "absolute -translate-x-1/2 -translate-y-1/2 cursor-move whitespace-nowrap rounded px-1 leading-tight",
                      isSel
                        ? "outline-2 outline-dashed outline-amber-500"
                        : "hover:outline-2 hover:outline-dashed hover:outline-amber-300",
                    )}
                    style={{
                      left: `${f.x}%`,
                      top: `${f.y}%`,
                      color: f.color,
                      fontSize: `${f.fontSize}px`,
                      fontWeight: f.bold ? 700 : 400,
                      fontStyle: f.italic ? "italic" : "normal",
                      textAlign: f.align,
                      fontFamily: f.kind === "recipient" ? "var(--font-serif)" : undefined,
                    }}
                  >
                    {isBox ? (
                      <span className="grid h-14 w-14 place-items-center bg-stone-900 text-[10px] text-white/70">
                        {f.text}
                      </span>
                    ) : (
                      f.text
                    )}
                  </div>
                );
              })}
            </div>
            <p className="mt-3 text-center text-xs text-stone-400">
              Drag fields to position them. Click a field to edit its properties.
            </p>
          </div>
        </div>

        {/* Properties */}
        <aside className="w-72 shrink-0 overflow-y-auto border-l border-stone-200 bg-white p-4 dark:border-stone-800 dark:bg-stone-900">
          {selected ? (
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">{selected.label}</p>
                <button
                  onClick={() => {
                    setFields((fs) => fs.filter((f) => f.id !== selected.id));
                    setSelectedId(null);
                  }}
                  className="grid h-8 w-8 place-items-center rounded-lg text-stone-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>

              <label className="block">
                <span className="text-xs font-medium text-stone-500">Content</span>
                <input
                  value={selected.text}
                  onChange={(e) => update(selected.id, { text: e.target.value })}
                  className="mt-1.5 h-9 w-full rounded-lg border border-stone-300 bg-white px-2.5 text-sm focus:border-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 dark:border-stone-700 dark:bg-stone-950"
                />
              </label>

              <div className="grid grid-cols-2 gap-3">
                <label className="block">
                  <span className="text-xs font-medium text-stone-500">Font size</span>
                  <input
                    type="number"
                    value={selected.fontSize}
                    onChange={(e) => update(selected.id, { fontSize: Number(e.target.value) })}
                    className="mt-1.5 h-9 w-full rounded-lg border border-stone-300 bg-white px-2.5 text-sm focus:border-stone-400 focus:outline-none dark:border-stone-700 dark:bg-stone-950"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-medium text-stone-500">Color</span>
                  <input
                    type="color"
                    value={selected.color}
                    onChange={(e) => update(selected.id, { color: e.target.value })}
                    className="mt-1.5 h-9 w-full cursor-pointer rounded-lg border border-stone-300 bg-white px-1 dark:border-stone-700 dark:bg-stone-950"
                  />
                </label>
              </div>

              <div>
                <span className="text-xs font-medium text-stone-500">Alignment</span>
                <div className="mt-1.5 grid grid-cols-3 gap-1 rounded-lg border border-stone-200 p-1 dark:border-stone-700">
                  {([["left", AlignLeft], ["center", AlignCenter], ["right", AlignRight]] as const).map(
                    ([a, Icon]) => (
                      <button
                        key={a}
                        onClick={() => update(selected.id, { align: a })}
                        className={cn(
                          "grid h-8 place-items-center rounded-md transition",
                          selected.align === a
                            ? "bg-stone-900 text-white dark:bg-white dark:text-stone-900"
                            : "text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-800",
                        )}
                      >
                        <Icon className="h-4 w-4" />
                      </button>
                    ),
                  )}
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => update(selected.id, { bold: !selected.bold })}
                  className={cn(
                    "h-9 flex-1 rounded-lg border text-sm font-bold transition",
                    selected.bold
                      ? "border-stone-900 bg-stone-900 text-white dark:border-white dark:bg-white dark:text-stone-900"
                      : "border-stone-200 text-stone-600 hover:bg-stone-50 dark:border-stone-700 dark:hover:bg-stone-800",
                  )}
                >
                  B
                </button>
                <button
                  onClick={() => update(selected.id, { italic: !selected.italic })}
                  className={cn(
                    "h-9 flex-1 rounded-lg border text-sm italic transition",
                    selected.italic
                      ? "border-stone-900 bg-stone-900 text-white dark:border-white dark:bg-white dark:text-stone-900"
                      : "border-stone-200 text-stone-600 hover:bg-stone-50 dark:border-stone-700 dark:hover:bg-stone-800",
                  )}
                >
                  I
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3 border-t border-stone-100 pt-4 dark:border-stone-800">
                <label className="block">
                  <span className="text-xs font-medium text-stone-500">X %</span>
                  <input
                    type="number"
                    value={Math.round(selected.x)}
                    onChange={(e) => update(selected.id, { x: Number(e.target.value) })}
                    className="mt-1.5 h-9 w-full rounded-lg border border-stone-300 bg-white px-2.5 text-sm dark:border-stone-700 dark:bg-stone-950"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-medium text-stone-500">Y %</span>
                  <input
                    type="number"
                    value={Math.round(selected.y)}
                    onChange={(e) => update(selected.id, { y: Number(e.target.value) })}
                    className="mt-1.5 h-9 w-full rounded-lg border border-stone-300 bg-white px-2.5 text-sm dark:border-stone-700 dark:bg-stone-950"
                  />
                </label>
              </div>
            </div>
          ) : (
            <div className="flex h-full flex-col items-center justify-center py-16 text-center text-sm text-stone-400">
              <Type className="mb-3 h-8 w-8" />
              Select a field on the canvas to edit its properties, or add one from the left.
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
