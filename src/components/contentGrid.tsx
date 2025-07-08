import ContentCard from "@/components/contentCard";
import type { Content, ContentGridProps } from "@/types";

export default function ContentGrid({ title, content }: ContentGridProps) {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">{title}</h1>
      <article className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {content.map((item: Content) => (
          <ContentCard key={item.id} content={item} />
        ))}
      </article>
    </section>
  );
}
