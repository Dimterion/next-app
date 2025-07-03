import Image from "next/image";
import heroImg from "@/assets/images/placeholder_img.jpg";

export default function AboutPage() {
  return (
    <main>
      <section className="container mx-auto max-w-4xl px-4 py-8">
        <h1 className="mb-6 text-center text-4xl font-bold">About Next App</h1>
        <article className="mb-12 grid items-center gap-8 md:grid-cols-2">
          <Image
            src={heroImg}
            alt="About page image"
            width={350}
            height={350}
          />
          <section>
            <p
              className="mb-4 text-sm text-gray-600 uppercase"
              aria-hidden="true"
            >
              About Next App
            </p>
            <h2 className="mb-4 text-2xl font-semibold">Lorem Ipsum</h2>
            <p className="mb-4 text-gray-700">Lorem ipsum dolor.</p>
            <p className="text-gray-700">Lorem ipsum dolor. Lorem ipsum.</p>
          </section>
        </article>
      </section>
      <hr className="border-gray-200" aria-hidden="true" />
      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="sr-only">Lorem</h2>
        <div className="grid gap-6 md:grid-cols-3 md:gap-0">
          <article className="bg-white p-6">
            <h3 className="mb-3 text-xl font-semibold">Lorem</h3>
            <p className="text-gray-600">Lorem ipsum dolor.</p>
          </article>
          <article className="border-gray-400 bg-white p-6 md:border-x">
            <h3 className="mb-3 text-xl font-semibold">Ipsum</h3>
            <p className="text-gray-600">Lorem ipsum dolor.</p>
          </article>
          <article className="bg-white p-6">
            <h3 className="mb-3 text-xl font-semibold">Dolor</h3>
            <p className="text-gray-600">Lorem ipsum dolor.</p>
          </article>
        </div>
      </section>
      <hr className="border-gray-200" aria-hidden="true" />
      <section className="prose container mx-auto max-w-3xl px-4 py-8">
        <h2 className="mb-4 text-2xl font-semibold">Lorem</h2>
        <p className="mb-4 text-gray-700">Lorem ipsum dolor.</p>
        <p className="text-gray-700">Lorem ipsum dolor.</p>
      </section>
    </main>
  );
}
