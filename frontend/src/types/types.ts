import { LucideIcon } from "lucide-react";

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
}

interface FooterItem {
  label: string;
}

interface LandingPageFeatures {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface LandingPageTestimonials {
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

interface StatsProps {
  value: string;
  label: string;
}

export type {
  BlogCardProps,
  NavItem,
  FooterItem,
  LandingPageFeatures,
  LandingPageTestimonials,
  StatsProps,
};
