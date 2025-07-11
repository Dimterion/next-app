import contentData from "@/assets/content/content.json";
import type { Content, GetContentParams } from "@/types";

export default async function getContent({
  category,
}: GetContentParams = {}): Promise<Content[]> {
  let filteredContent = [...contentData];

  if (category) {
    filteredContent = contentData.filter(
      (content: Content) => content.category === category,
    );
  }

  return filteredContent;
}

export async function getContentById(id: string | number): Promise<Content> {
  const foundContent = contentData.find(
    (content: Content) => content.id.toString() === id.toString(),
  );

  if (!foundContent) {
    throw new Error(`Content with id ${id} not found.`);
  }

  return foundContent;
}
