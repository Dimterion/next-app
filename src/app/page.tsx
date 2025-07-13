import Link from "next/link";
import Image from "next/image";
import homePageImg from "@/assets/images/story_cover_img.jpg";

export default function Home() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-8 px-6 py-12 md:flex-row">
      <article className="flex-1 space-y-6">
        <p className="hidden text-sm text-gray-600 uppercase md:block">
          A Sci-Fi Story
        </p>
        <h1 className="text-4xl font-bold md:text-5xl">Trust Issue</h1>
        <p className="mb-10 text-lg text-gray-600">
          When everyone can be exposed and turned into the enemy and every
          family is a battle unit, trust becomes a delicate issue.
          <br />
          <br />
          One such family ends up facing this problem, being stuck in the middle
          of nowhere with a limited time to solve it.
          <br />
          <br />
          Another remnant of a never-ending war that had begun long before them
          and will continue long after. They don&apos;t know what started it all
          and they hardly care. When exposure happens, you don&apos;t have the
          luxury of thinking about it. Everyone is in danger and there is only
          one way out of it. Following that way is the most difficult decision
          you have to make.
        </p>
        <Link
          href="/content"
          className="border-2 border-black bg-white px-6 py-3 text-black transition duration-100 hover:bg-black hover:text-white"
        >
          Read
        </Link>
      </article>
      <Image
        src={homePageImg}
        alt="Home page image"
        className="rounded-lg"
        width={350}
        height={350}
      />
    </main>
  );
}
