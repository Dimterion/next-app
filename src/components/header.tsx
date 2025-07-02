import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-row gap-2">
      <Link href="/">Next App</Link>
      <nav>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}
