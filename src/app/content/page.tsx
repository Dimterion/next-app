import { getAllContent } from "@/lib/content";
import type { Content } from "@/types";
import ContentCard from "@/components/contentCard";

export default async function ContentPage() {
  const content = await getAllContent();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">All Content</h1>
      <section
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        role="region"
        aria-label="Content"
      >
        {content.map((item: Content) => (
          <ContentCard key={item.id} content={item} />
        ))}
      </section>
    </div>
  );
}
