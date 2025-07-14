import Form from "next/form";
import type { ContentPageProps } from "@/types";
import getContent from "@/lib/content";
import ContentGrid from "@/components/contentGrid";

export default async function ContentPage({ searchParams }: ContentPageProps) {
  const { query } = await searchParams;
  const content = await getContent();
  const normalizedQuery = query?.toLowerCase() || "";

  const filteredContent = normalizedQuery
    ? content.filter(
        (item) =>
          item.name.toLowerCase().includes(normalizedQuery) ||
          item.description.toLowerCase().includes(normalizedQuery),
      )
    : content;

  return (
    <>
      <Form action="/content" className="w-full px-5 md:max-w-xl md:px-0">
        <input
          type="text"
          name="query"
          placeholder="E.g. Chapter 1"
          autoComplete="off"
          defaultValue={normalizedQuery}
          className="w-full rounded-full border border-[#606060] bg-white py-3 pr-5 pl-5 text-sm placeholder-gray-500 focus:border-[#606060] focus:ring-0 focus:outline-none md:text-base"
        />
      </Form>
      <ContentGrid title="Contents" content={filteredContent} />
    </>
  );
}
