import Image from "next/image";
import type { ContentItemProps } from "@/types";
import { getContentById } from "@/lib/content";
import Pill from "@/components/pill";

export default async function ContentItem({ params }: ContentItemProps) {
  const { id } = await params;
  const content = await getContentById(id);

  return (
    <section className="container mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-8 lg:grid-cols-2">
      <Image
        src={content.image}
        alt={content.name}
        className="inset-0 aspect-square h-full w-full max-w-[500px] overflow-hidden rounded-lg object-cover shadow-lg"
        width={500}
        height={500}
      />
      <article className="flex h-full flex-col justify-center">
        <h1 className="mb-6 text-4xl font-bold">{content.name}</h1>
        <Pill className="mb-6 w-fit" aria-label="Category">
          {content.categoryName}
        </Pill>
        <h2 className="mb-6 max-w-none leading-relaxed font-bold text-gray-700">
          {content.description}
        </h2>
        <p className="mb-6 max-w-none leading-relaxed text-gray-700">
          {content.text}
        </p>
        <time className="text-sm text-gray-500" dateTime={content.dateAdded}>
          Added on {content.dateAdded}
        </time>
      </article>
    </section>
  );
}
