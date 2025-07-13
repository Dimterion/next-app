"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/story_logo.jpg";
import NavLink from "./navLink";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex w-full items-center justify-between bg-white p-4">
      <Link href="/">
        <Image
          src={logo}
          alt="Logo"
          className="w-[50px] md:w-[150px] rounded-lg"
          width={150}
          height={50}
        />
      </Link>
      <nav className="flex items-center gap-1 text-sm uppercase">
        <NavLink isActive={pathname.startsWith("/content")} href="/content">
          Content
        </NavLink>
        <NavLink isActive={pathname === "/about"} href="/about">
          About
        </NavLink>
      </nav>
    </header>
  );
}
