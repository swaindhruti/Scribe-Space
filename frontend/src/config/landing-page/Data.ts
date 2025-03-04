import {
  LandingPageFeatures,
  LandingPageTestimonials,
  StatsProps,
} from "@/types/types";
import { PenSquare, Zap, Target, Blocks } from "lucide-react";

const features: LandingPageFeatures[] = [
  {
    icon: PenSquare,
    title: "Write Stories",
    description: "Create compelling content with our powerful editor",
  },
  {
    icon: Zap,
    title: "Instant Publishing",
    description: "Share your thoughts with the world immediately",
  },
  {
    icon: Target,
    title: "Reach Audience",
    description: "Connect with readers who love your content",
  },
  {
    icon: Blocks,
    title: "Build Community",
    description: "Grow your following and engage with fans",
  },
];

const testimonials: LandingPageTestimonials[] = [
  {
    name: "Sarah Johnson",
    role: "Tech Blogger",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    content:
      "ScribeSpace transformed how I share my tech insights. The platform's intuitive design and powerful features make blogging a joy.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Travel Writer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    content:
      "As a travel writer, I need a platform that can keep up with my adventures. ScribeSpace delivers exactly that and more.",
    rating: 5,
  },
  {
    name: "Emma Wilson",
    role: "Food Critic",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    content:
      "The community engagement features are outstanding. My food reviews now reach thousands of passionate foodies.",
    rating: 5,
  },
];

const brands: string[] = [
  "TechCrunch",
  "Forbes",
  "Wired",
  "The Verge",
  "Mashable",
  "Fast Company",
  "Inc.",
  "VentureBeat",
  "CNET",
  "TechRadar",
];

const Stats: StatsProps[] = [
  { value: "10K+", label: "Writers" },
  { value: "50K+", label: "Stories" },
  { value: "1M+", label: "Readers" },
  { value: "150+", label: "Countries" },
  { value: "500+", label: "Contributors" },
  { value: "200+", label: "Collaborations" },
  { value: "300+", label: "Workshops" },
  { value: "100+", label: "Events" },
];

export { features, testimonials, brands, Stats };
