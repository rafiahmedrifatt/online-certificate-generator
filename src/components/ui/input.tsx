import { cn } from "@/lib/utils";

export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-lg border border-stone-300 bg-white px-3.5 text-[15px] text-stone-900 placeholder:text-stone-400 transition focus:border-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 dark:border-stone-700 dark:bg-stone-950 dark:text-stone-100 dark:placeholder:text-stone-500",
        className,
      )}
      {...props}
    />
  );
}

export function Textarea({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "w-full rounded-lg border border-stone-300 bg-white px-3.5 py-2.5 text-[15px] text-stone-900 placeholder:text-stone-400 transition focus:border-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 dark:border-stone-700 dark:bg-stone-950 dark:text-stone-100 dark:placeholder:text-stone-500",
        className,
      )}
      {...props}
    />
  );
}

export function Label({ className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn("text-sm font-medium text-stone-700 dark:text-stone-300", className)}
      {...props}
    />
  );
}

export function Select({ className, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn(
        "h-11 w-full rounded-lg border border-stone-300 bg-white px-3.5 text-[15px] text-stone-900 transition focus:border-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 dark:border-stone-700 dark:bg-stone-950 dark:text-stone-100",
        className,
      )}
      {...props}
    />
  );
}
