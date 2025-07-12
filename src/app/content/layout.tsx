import type { ReactNode } from "react";
import CategoriesNav from "@/components/categoriesNav";

export default function ContentLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <CategoriesNav />
      <section className="flex-1 p-4 md:ml-64">{children}</section>
    </main>
  );
}
