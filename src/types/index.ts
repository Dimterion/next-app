import type { ReactNode } from "react";

export type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export type Content = {
  id: number;
  name: string;
  description: string;
  likes: number;
  image: string;
  category: string;
  dateAdded: string;
};

export type ContentCardProps = {
  content: Content;
};

export type TagProps = {
  children: ReactNode;
  className?: string;
};
