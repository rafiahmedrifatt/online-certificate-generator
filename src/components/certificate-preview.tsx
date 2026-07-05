import { cn } from "@/lib/utils";

type Props = {
  recipientName: string;
  title?: string;
  subtitle?: string;
  course?: string;
  date?: string;
  signatory?: string;
  publicId?: string;
  className?: string;
};

/**
 * A print-styled certificate visual. In the real app the layout will be driven
 * by the template's saved JSON; this is the shared static rendition used across
 * the designer preview, the certificate detail page, and public verification.
 */
export function CertificatePreview({
  recipientName,
  title = "Certificate of Achievement",
  subtitle = "This is proudly presented to",
  course = "for outstanding performance and dedication",
  date = "July 6, 2026",
  signatory = "Vision Academy",
  publicId,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "aspect-[1.414/1] w-full bg-white p-[4%] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] [container-type:inline-size]",
        className,
      )}
    >
      <div className="flex h-full w-full flex-col items-center justify-center border-2 border-amber-300/70 px-[6%] text-center">
        <p className="text-[1.6cqw] font-medium uppercase tracking-[0.35em] text-amber-700">
          {title}
        </p>
        <p className="mt-[4%] text-[1.3cqw] text-stone-400">{subtitle}</p>
        <p className="mt-[2%] font-serif text-[4.5cqw] font-light italic text-stone-900">
          {recipientName}
        </p>
        <div className="mt-[3%] h-px w-[30%] bg-amber-400/70" />
        <p className="mt-[3%] max-w-[70%] text-[1.4cqw] leading-relaxed text-stone-500">
          {course}
        </p>
        <div className="mt-[6%] flex w-full items-end justify-between px-[4%]">
          <div className="text-center">
            <p className="border-t border-stone-300 pt-1 text-[1.1cqw] text-stone-500">
              {date}
            </p>
            <p className="text-[0.9cqw] uppercase tracking-wider text-stone-400">Date</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="grid h-[7cqw] w-[7cqw] place-items-center rounded-sm bg-stone-900 text-[0.7cqw] text-white/70">
              QR
            </div>
            {publicId && (
              <p className="mt-1 text-[0.8cqw] tracking-wider text-stone-400">{publicId}</p>
            )}
          </div>
          <div className="text-center">
            <p className="border-t border-stone-300 pt-1 font-serif text-[1.3cqw] italic text-stone-700">
              {signatory}
            </p>
            <p className="text-[0.9cqw] uppercase tracking-wider text-stone-400">Signature</p>
          </div>
        </div>
      </div>
    </div>
  );
}
