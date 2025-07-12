import type { Content, GetContentParams } from "@/types";

async function getData(): Promise<Content[]> {
  const url = process.env.NEXT_PUBLIC_CONTENT_URL;

  if (!url) {
    throw new Error("Missing environment variable: NEXT_PUBLIC_CONTENT_URL");
  }

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json: Content[] = await response.json();

    return json;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export default async function getContent({
  category,
}: GetContentParams = {}): Promise<Content[]> {
  const contentData = await getData();

  let filteredContent = [...contentData];

  if (category) {
    filteredContent = contentData.filter(
      (content: Content) => content.category === category,
    );
  }

  return filteredContent;
}

export async function getContentById(id: string | number): Promise<Content> {
  const contentData = await getData();

  const foundContent = contentData.find(
    (content: Content) => content.id.toString() === id.toString(),
  );

  if (!foundContent) {
    throw new Error(`Content with id ${id} not found.`);
  }

  return foundContent;
}
