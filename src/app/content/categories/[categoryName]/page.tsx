import type { CategoryItemProps } from "@/types";
import { getCategoryBySlug } from "@/lib/categories";
import getContent from "@/lib/content";
import ContentGrid from "@/components/contentGrid";

export default async function CategoryItem({ params }: CategoryItemProps) {
  const { categoryName } = await params;
  const category = getCategoryBySlug(categoryName);
  const content = await getContent({ category: categoryName });

  return <ContentGrid title={category.displayName} content={content} />;
}
