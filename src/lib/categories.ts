import { Category } from "@/types";

async function getData(): Promise<Category[]> {
  const url = process.env.NEXT_PUBLIC_CATEGORIES_URL;

  if (!url) {
    throw new Error("Missing environment variable: NEXT_PUBLIC_CATEGORIES_URL");
  }

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json: Category[] = await response.json();

    return json;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export async function getAllCategories(): Promise<Category[]> {
  return getData();
}

export async function getCategoryBySlug(slug: string): Promise<Category> {
  const categories = await getData();
  const category = categories.find((item: Category) => item.slug === slug);

  if (!category) {
    throw new Error(`Category with slug ${slug} not found.`);
  }

  return category;
}

export async function getDisplayNameFromSlug(slug: string): Promise<string> {
  const category = await getCategoryBySlug(slug);

  return category.displayName;
}
