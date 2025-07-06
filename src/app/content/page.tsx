import Link from "next/link";
import { getAllContent } from "@/lib/content";
import type { Content } from "@/types";

export default async function ContentPage() {
  const content = await getAllContent();

  return (
    <section className="mx-auto my-0 max-w-[800px] p-[20px]">
      <h1>Content</h1>
      <ul className="p-0">
        {content.map((item: Content) => (
          <li
            key={item.id}
            className="mb-[10px] cursor-pointer rounded border border-solid bg-white p-[15px] transition-colors hover:bg-gray-50"
          >
            <Link href={`/content/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
