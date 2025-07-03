import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between bg-white px-6 py-4">
      <Image
        src="/logo.svg"
        alt="Logo"
        className="w-[50px] md:w-[150px]"
        width={150}
        height={50}
      />
      <nav className="flex items-center gap-2.5">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}
