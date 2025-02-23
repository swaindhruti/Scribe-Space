import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { BlogCardProps } from "@/types/types";

const BlogCard = ({
  blogTitle,
  blogDescription,
  coverImageUrl,
  blogAuthor,
  readTime,
}: BlogCardProps) => (
  <Card className="hover:translate-y-reverseBoxShadowX hover:translate-x-reverseBoxShadowX transition-all duration-300">
    <CardHeader className="p-0 mb-6">
      <img
        src={coverImageUrl}
        alt="Description"
        className="object-cover w-full h-60 md:h-72"
      />
    </CardHeader>
    <CardContent>
      <CardTitle>{blogTitle}</CardTitle>
      <CardDescription>{blogDescription}</CardDescription>
    </CardContent>
    <CardFooter className="justify-between">
      <h4 className="text-sm">{blogAuthor}</h4>
      <h4 className="text-sm">{readTime}</h4>
    </CardFooter>
  </Card>
);

export default BlogCard;
