import content from "@/assets/content/content.json";
import type { Content } from "@/types";

export default async function getAllContent(): Promise<Content[]> {
  return content;
}

export async function getContentById(id: string | number): Promise<Content> {
  const foundContent = content.find(
    (content: Content) => content.id.toString() === id.toString(),
  );

  if (!foundContent) {
    throw new Error(`Content with id ${id} not found.`);
  }

  return foundContent;
}
