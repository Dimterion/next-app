import getAllContent from "@/lib/content";
import ContentGrid from "@/components/contentGrid";

export default async function ContentPage() {
  const content = await getAllContent();

  return <ContentGrid title="Content" content={content} />;
}
