import getContent from "@/lib/content";
import ContentGrid from "@/components/contentGrid";

export default async function ContentPage() {
  const content = await getContent();

  return <ContentGrid title="Content" content={content} />;
}
