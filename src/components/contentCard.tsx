import Link from "next/link";
import Image from "next/image";
import { ContentCardProps } from "@/types";
import placeholderImg from "@/assets/images/placeholder_img.jpg";

export default function ContentCard({ content }: ContentCardProps) {
  return (
    <Link
      href={`/content/${content.id}`}
      className="group block transition-all hover:-translate-y-[3px] hover:shadow-[0_5px_12px_rgba(0,0,0,0.1)]"
      aria-labelledby={`content-${content.id}-title`}
    >
      <article
        className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg"
        role="article"
      >
        <Image
          src={placeholderImg.src}
          alt={content.name}
          width={300}
          height={300}
          className="relative inset-0 aspect-square h-full w-full object-cover"
        />
        <section className="p-4">
          <div className="mb-2 flex min-h-[3.5rem] justify-between">
            <h2
              id={`content-${content.id}-title`}
              className="line-clamp-2 text-xl font-semibold text-gray-800"
            >
              {content.name}
            </h2>
          </div>
          <p className="line-clamp-2 min-h-[2.5rem] text-sm leading-[1.25rem] text-gray-800">
            {content.description}
          </p>
          <div className="mt-2">{content.category}</div>
          <div
            className="mt-2 flex items-center text-gray-600"
            aria-label={`${content.likes} likes`}
          >
            Likes:
            <span>{content.likes}</span>
          </div>
        </section>
      </article>
    </Link>
  );
}
