import Image from "next/image";
import type { ContentItemProps } from "@/types";
import { getContentById } from "@/lib/content";
import placeholderImg from "@/assets/images/placeholder_img.jpg";
import Pill from "@/components/pill";

export default async function ContentItem({ params }: ContentItemProps) {
  const { id } = await params;
  const content = await getContentById(id);

  return (
    <section className="container mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-8 lg:grid-cols-2">
      <Image
        src={placeholderImg}
        alt={content.name}
        className="inset-0 aspect-square h-full w-full max-w-[500px] overflow-hidden rounded-lg object-cover shadow-lg"
      />
      <article className="flex h-full flex-col justify-center">
        <section
          className="mb-2 flex items-center text-2xl text-gray-600"
          role="status"
          aria-label="Likes count"
        >
          Likes:
          <span
            className="ml-1 font-light"
            aria-label={`${content.likes} likes`}
          >
            {content.likes}
          </span>
        </section>
        <h1 className="mb-6 text-4xl font-bold">{content.name}</h1>
        <Pill className="mb-6 w-fit" aria-label="Category">
          {content.category}
        </Pill>
        <p className="prose prose-lg mb-6 max-w-none leading-relaxed text-gray-700">
          {content.description}
        </p>
        <time className="text-sm text-gray-500" dateTime={content.dateAdded}>
          Added on {new Date(content.dateAdded).toLocaleDateString()}
        </time>
      </article>
    </section>
  );
}
