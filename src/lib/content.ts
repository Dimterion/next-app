import { fetchData } from "@/lib/utils";
import type { Content, GetContentParams } from "@/types";

const url = process.env.NEXT_PUBLIC_CONTENT_URL!;

export default async function getContent({
  category,
}: GetContentParams = {}): Promise<Content[]> {
  const contentData = await fetchData<Content>(url);

  let filteredContent = [...contentData];

  if (category) {
    filteredContent = contentData.filter(
      (content) => content.category === category,
    );
  }

  return filteredContent;
}

export async function getContentById(id: string | number): Promise<Content> {
  const contentData = await fetchData<Content>(url);

  const foundContent = contentData.find(
    (content) => content.id.toString() === id.toString(),
  );

  if (!foundContent) {
    throw new Error(`Content with id ${id} not found.`);
  }

  return foundContent;
}
