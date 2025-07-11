import Form from "next/form";
import { ContentPageProps } from "@/types";
import getContent from "@/lib/content";
import ContentGrid from "@/components/contentGrid";

export default async function ContentPage({ searchParams }: ContentPageProps) {
  const content = await getContent();
  const query = (await searchParams)?.query?.toLowerCase() || "";
  const filteredContent = query
    ? content.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query),
      )
    : content;

  return (
    <>
      <Form action="/content" className="w-full px-5 md:max-w-xl md:px-0">
        <input
          type="text"
          name="query"
          placeholder="E.g. lorem"
          autoComplete="off"
          defaultValue={query}
          className="w-full rounded-full border border-[#606060] bg-white py-3 pr-5 pl-5 text-sm placeholder-gray-500 focus:border-[#606060] focus:ring-0 focus:outline-none md:text-base"
        />
      </Form>
      <ContentGrid title="Content" content={filteredContent} />
    </>
  );
}
