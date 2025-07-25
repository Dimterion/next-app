import type { ReactNode } from "react";

export type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export type Content = {
  id: number;
  name: string;
  description: string;
  textLink: string;
  text: string;
  image: string;
  category: string;
  categoryName: string;
  dateAdded: string;
};

export type ContentPageProps = {
  searchParams: Promise<{
    query?: string;
  }>;
};

export type ContentItemProps = {
  params: Promise<{
    id: string;
  }>;
};

export type Category = {
  displayName: string;
  slug: string;
};

export type GetContentParams = {
  category?: string;
};

export type CategoryItemProps = {
  params: Promise<{
    categoryName: string;
  }>;
};

export type ContentCardProps = {
  content: Content;
};

export type ContentGridProps = {
  title: string;
  content: Content[];
};

export type PillProps = {
  children: ReactNode;
  className?: string;
};

export type NavLinkProps = {
  href: string;
  isActive: boolean;
  children: ReactNode;
};
