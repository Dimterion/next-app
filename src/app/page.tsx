import Link from "next/link";
import Image from "next/image";
import homePageImg from "@/assets/images/placeholder_img.jpg";

export default function Home() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-8 px-6 py-12 md:flex-row">
      <article className="flex-1 space-y-6">
        <p className="hidden text-sm text-gray-600 uppercase md:block">
          Next App
        </p>
        <h1 className="text-4xl font-bold md:text-5xl">Lorem Ipsum</h1>
        <p className="mb-10 text-lg text-gray-600">Lorem ipsum dolor.</p>
        <Link
          href="/content"
          className="border-2 border-black bg-white px-6 py-3 text-black transition duration-100 hover:bg-black hover:text-white"
        >
          Next
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
