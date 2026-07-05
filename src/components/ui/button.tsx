import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium whitespace-nowrap transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-stone-900 text-white hover:bg-stone-700 dark:bg-white dark:text-stone-900 dark:hover:bg-stone-200",
        outline:
          "border border-stone-300 text-stone-700 hover:border-stone-400 hover:bg-white dark:border-stone-700 dark:text-stone-300 dark:hover:bg-stone-900",
        ghost:
          "text-stone-600 hover:bg-stone-100 hover:text-stone-900 dark:text-stone-400 dark:hover:bg-stone-800 dark:hover:text-white",
        accent:
          "bg-amber-600 text-white hover:bg-amber-700 dark:bg-amber-500 dark:hover:bg-amber-600",
        danger:
          "bg-red-600 text-white hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600",
      },
      size: {
        sm: "h-9 rounded-full px-4 text-sm",
        md: "h-11 rounded-full px-6 text-[15px]",
        lg: "h-14 rounded-full px-8 text-base",
        icon: "h-9 w-9 rounded-full",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { href?: string };

export function Button({ className, variant, size, href, ...props }: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);
  if (href) {
    return (
      <Link href={href} className={classes}>
        {props.children}
      </Link>
    );
  }
  return <button className={classes} {...props} />;
}

export { buttonVariants };
