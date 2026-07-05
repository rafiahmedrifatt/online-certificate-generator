import { Designer } from "@/components/designer/designer";

export default async function DesignerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <Designer templateId={id} />;
}
