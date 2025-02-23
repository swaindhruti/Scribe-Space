interface BlogCardProps {
  blogTitle: string;
  blogDescription: string;
  coverImageUrl: string;
  blogAuthor: string;
  readTime: string;
}
interface NavItem {
  label: string;
  href: string;
  isButton: boolean;
}

export type { BlogCardProps, NavItem };
