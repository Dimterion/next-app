import type { ReactNode } from "react";
import Link from "next/link";
import { getAllCategories } from "@/lib/categories";
import { Category } from "@/types";

export default function ContentLayout({ children }: { children: ReactNode }) {
  const categories: Category[] = getAllCategories();

  return (
    <div className="relative flex min-h-screen flex-col md:flex-row">
      <aside className="sticky top-0 z-10 w-full border-b border-gray-200 bg-white md:fixed md:top-1/2 md:w-64 md:-translate-y-1/2 md:border-none">
          <nav className="scrollbar-hide w-full overflow-x-auto md:overflow-visible">
            <ul className="flex space-x-4 px-4 py-3 whitespace-nowrap md:flex-col md:space-y-3 md:space-x-0 md:p-0">
              <Link href="/content">All</Link>
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/content/categories/${category.slug}`}
                >
                  {category.displayName}
                </Link>
              ))}
            </ul>
          </nav>
          <div className="pointer-events-none absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-white to-transparent md:hidden" />
      </aside>
      <main className="flex-1 p-4 md:ml-64">{children}</main>
    </div>
  );
}
