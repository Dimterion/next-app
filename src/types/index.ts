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
