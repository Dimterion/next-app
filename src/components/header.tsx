"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/story_logo.jpg";
import NavLink from "./navLink";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex w-full items-center justify-between bg-white p-2 sm:p-4">
      <Link href="/">
        <Image
          src={logo}
          alt="Logo"
          className="rounded-lg"
          width={150}
          height={50}
        />
      </Link>
      <nav className="ml-4 flex items-center gap-1 text-sm uppercase sm:ml-0">
        <NavLink isActive={pathname.startsWith("/content")} href="/content">
          Story
        </NavLink>
        <NavLink isActive={pathname === "/about"} href="/about">
          About
        </NavLink>
      </nav>
    </header>
  );
}
