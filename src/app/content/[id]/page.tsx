import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import type { ContentItemProps } from "@/types";
import { getContentById } from "@/lib/content";
import { fetchText } from "@/lib/utils";
import Pill from "@/components/pill";

export default async function ContentItem({ params }: ContentItemProps) {
  const { id } = await params;
  const content = await getContentById(id);

  const textContent = content.textLink
    ? await fetchText(content.textLink)
    : null;

  let nextPageLink = "/";

  try {
    const nextPageContent = await getContentById(Number(id) + 1);

    nextPageLink = `/content/${nextPageContent.id}`;
  } catch {
    nextPageLink = "/content";
  }

  return (
    <section className="container mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-8">
      <Image
        src={content.image}
        alt={content.name}
        className="inset-0 aspect-square h-full w-full max-w-[500px] overflow-hidden rounded-lg object-cover shadow-lg"
        width={500}
        height={500}
      />
      <Link href={nextPageLink}>
        {nextPageLink === "/content" ? "Back to Contents" : "Next"}
      </Link>
      <article className="flex h-full flex-col justify-center">
        <h1 className="mb-6 text-4xl font-bold">{content.name}</h1>
        <Pill className="mb-6 w-fit" aria-label="Category">
          {content.categoryName}
        </Pill>
        <h2 className="mb-6 max-w-none leading-relaxed font-bold text-gray-700">
          {content.description}
        </h2>
        <div className="mb-6 max-w-none leading-relaxed text-gray-700">
          {content.textLink ? (
            <ReactMarkdown>{textContent}</ReactMarkdown>
          ) : (
            content.text
          )}
        </div>
        <time className="text-sm text-gray-500" dateTime={content.dateAdded}>
          Added on {content.dateAdded}
        </time>
      </article>
    </section>
  );
}
