import { fetchData } from "@/lib/utils";
import { Category } from "@/types";

const url = process.env.NEXT_PUBLIC_CATEGORIES_URL!;

export async function getAllCategories(): Promise<Category[]> {
  return fetchData<Category>(url);
}

export async function getCategoryBySlug(slug: string): Promise<Category> {
  const categories = await fetchData<Category>(url);
  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    throw new Error(`Category with slug ${slug} not found.`);
  }

  return category;
}

export async function getDisplayNameFromSlug(slug: string): Promise<string> {
  const category = await getCategoryBySlug(slug);
  return category.displayName;
}
