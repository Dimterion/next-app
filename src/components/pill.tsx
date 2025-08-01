import { PillProps } from "@/types";

export default function Pill({ children, className = "" }: PillProps) {
  return (
    <span
      className={`inline-block rounded-full border border-gray-400 bg-transparent px-3 py-1 text-sm text-gray-800 ${className}`}
    >
      {children}
    </span>
  );
}
