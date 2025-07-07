import type { ContentItemProps } from "@/types";
import { getContentById } from "@/lib/content";

export default async function ContentItem({ params }: ContentItemProps) {
  const { id } = await params;
  const content = await getContentById(id);

  return <section>{content.name}</section>;
}
