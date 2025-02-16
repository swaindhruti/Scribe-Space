interface BlogCardProps {
  BlogTitle: string;
  BlogDescription: string;
  CoverImageURL: string;
  BlogAuthor: string;
  ReadTime: string;
}
interface NavItem {
  label: string;
  href: string;
  isButton: boolean;
}

export type { BlogCardProps, NavItem };
