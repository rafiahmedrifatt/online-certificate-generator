import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium",
  {
    variants: {
      variant: {
        neutral:
          "bg-stone-100 text-stone-700 dark:bg-stone-800 dark:text-stone-300",
        success:
          "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400",
        warning:
          "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-400",
        danger: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400",
        info: "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-400",
      },
    },
    defaultVariants: { variant: "neutral" },
  },
);

export function Badge({
  className,
  variant,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
