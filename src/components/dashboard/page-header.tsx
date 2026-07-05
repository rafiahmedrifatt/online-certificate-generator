export function PageHeader({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="font-serif text-3xl font-light tracking-tight text-stone-900 dark:text-stone-100">
          {title}
        </h1>
        {description && (
          <p className="mt-1.5 text-[15px] text-stone-500 dark:text-stone-400">{description}</p>
        )}
      </div>
      {children && <div className="flex items-center gap-2">{children}</div>}
    </div>
  );
}
