import Link from "next/link";
import { NavLinkProps } from "@/types";

export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="hover:text-orange-accent cursor-pointer rounded-md px-4 py-2 text-sm text-gray-700 uppercase transition-colors"
    >
      {children}
    </Link>
  );
}
