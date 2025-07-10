import type { ReactNode } from "react";
import NavLink from "@/components/navLink";
import { getAllCategories } from "@/lib/categories";
import { Category } from "@/types";

export default function ContentLayout({ children }: { children: ReactNode }) {
  const categories: Category[] = getAllCategories();

  return (
    <div className="relative flex min-h-screen flex-col md:flex-row">
      <aside className="sticky top-0 z-10 w-full border-b border-gray-200 bg-white md:fixed md:top-1/2 md:w-64 md:-translate-y-1/2 md:border-none">
        <nav className="scrollbar-hide flex w-full space-x-4 overflow-x-auto px-4 py-3 whitespace-nowrap md:flex-col md:space-x-0 md:overflow-visible md:p-0">
          <NavLink href="/content">All</NavLink>
          {categories.map((category) => (
            <NavLink
              key={category.slug}
              href={`/content/categories/${category.slug}`}
            >
              {category.displayName}
            </NavLink>
          ))}
        </nav>
        <div className="pointer-events-none absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-white to-transparent md:hidden" />
      </aside>
      <main className="flex-1 p-4 md:ml-64">{children}</main>
    </div>
  );
}
