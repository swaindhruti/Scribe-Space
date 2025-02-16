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
  BlogTitle,
  BlogDescription,
  CoverImageURL,
  BlogAuthor,
  ReadTime,
}: BlogCardProps) => (
  <Card className="hover:translate-y-reverseBoxShadowX hover:translate-x-reverseBoxShadowX transition-all duration-300">
    <CardHeader className="p-0 mb-6">
      <img
        src={CoverImageURL}
        alt="Description"
        className="object-cover w-64 h-60 md:w-96 md:h-72 max-w-full"
      />
    </CardHeader>
    <CardContent>
      <CardTitle>{BlogTitle}</CardTitle>
      <CardDescription>{BlogDescription}</CardDescription>
    </CardContent>
    <CardFooter className="justify-between">
      <h4>{BlogAuthor}</h4>
      <h4>{ReadTime}</h4>
    </CardFooter>
  </Card>
);

export default BlogCard;
