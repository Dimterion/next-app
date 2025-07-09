import type { ReactNode } from "react";
import Link from "next/link";
import { getAllCategories } from "@/lib/categories";

export default function ContentLayout({ children }: { children: ReactNode }) {
  const categories = getAllCategories();

  return (
    <>
      <nav>
        <Link href="/content">All</Link>
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/content/categories/${category.slug}`}
          >
            {category.displayName}
          </Link>
        ))}
      </nav>
      <section>{children}</section>
    </>
  );
}
