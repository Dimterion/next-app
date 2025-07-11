import type { ReactNode } from "react";
import CategoriesNav from "@/components/categoriesNav";

export default function ContentLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col md:flex-row">
      <CategoriesNav />
      <main className="flex-1 p-4 md:ml-64">{children}</main>
    </div>
  );
}
