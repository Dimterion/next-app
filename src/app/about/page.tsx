import Image from "next/image";
import heroImg from "@/assets/images/story_about_page_img.jpg";

export default function AboutPage() {
  return (
    <main>
      <section className="container mx-auto max-w-4xl px-4 py-8">
        <h1 className="mb-8 text-center text-4xl font-bold">
          About Trust Issue
        </h1>
        <article className="mb-12 grid items-center gap-8 md:grid-cols-2">
          <Image
            src={heroImg}
            alt="About page image"
            width={350}
            height={350}
            className="rounded-lg"
          />
          <section>
            <p
              className="mb-4 text-sm text-gray-600 uppercase"
              aria-hidden="true"
            >
              A Sci-Fi Story
            </p>
            <h2 className="mb-4 text-2xl font-semibold">Trust Issue</h2>
            <p className="mb-4 text-gray-700">
              A story about distant future, space battles and adventures to
              nowhere and everywhere.
            </p>
            <p className="text-gray-700">
              Originally posted{" "}
              <a
                href="https://www.royalroad.com/fiction/123720/trust-issue"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-accent hover:underline"
              >
                here
              </a>
              .
            </p>
          </section>
        </article>
      </section>
      <hr className="border-gray-200" aria-hidden="true" />
      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="sr-only">Links</h2>
        <div className="grid gap-6 md:grid-cols-3 md:gap-0">
          <article className="bg-white p-6">
            <h3 className="mb-3 text-xl font-semibold">
              Poets of Tomorrow’s World
            </h3>
            <a
              href="https://poets-of-tomorrows-world.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-accent hover:underline"
            >
              Interactive story
            </a>
          </article>
          <article className="border-gray-400 bg-white p-6 md:border-x">
            <h3 className="mb-3 text-xl font-semibold">
              Poets of Tomorrow’s World: gameOn(e)
            </h3>
            <a
              href="https://profound-cat-a609de.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-accent hover:underline"
            >
              Interactive story
            </a>
          </article>
          <article className="bg-white p-6">
            <h3 className="mb-3 text-xl font-semibold">Blog on Medium</h3>
            <a
              href="https://medium.com/@dimterion"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-accent hover:underline"
            >
              Blog link
            </a>
          </article>
        </div>
      </section>
      <hr className="border-gray-200" aria-hidden="true" />
      <section className="container mx-auto max-w-3xl px-4 py-8">
        <h2 className="mb-4 text-2xl font-semibold">Contact</h2>
        <p className="mb-4 text-gray-700">
          In case you want to reach out,{" "}
          <a
            href="https://www.dimterion.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-accent hover:underline"
          >
            here is a link to my contact page
          </a>
          .
        </p>
      </section>
    </main>
  );
}
