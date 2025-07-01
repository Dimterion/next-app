import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>Next App</h1>
      <p>Lorem ipsum</p>
      <Link href="/">Home</Link>
      <Image
        src="/home_page_img.jpg"
        alt="Home page image"
        width={100}
        height={100}
        priority={true}
      />
    </main>
  );
}
