import Link from "next/link";
import { NavLinkProps } from "@/types";

export default function NavLink({ href, isActive, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`hover:text-orange-accent cursor-pointer p-2 text-sm uppercase transition-colors ${isActive ? "text-orange-accent" : "text-gray-700"}`}
    >
      {children}
    </Link>
  );
}
