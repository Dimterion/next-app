import type { CategoryItemProps } from "@/types";
import { getCategoryBySlug } from "@/lib/categories";

export default async function CategoryItem({ params }: CategoryItemProps) {
  const { categoryName } = await params;
  const category = getCategoryBySlug(categoryName);

  return (
    <section className="container mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-8 lg:grid-cols-2">
      {category.displayName}
    </section>
  );
}
