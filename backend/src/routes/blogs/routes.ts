import { Hono } from "hono";
import {
  BulkBlogGet,
  BlogCreate,
  BlogRead,
  BlogUpdate,
  BlogDelete,
} from "../../controllers/blogs/controller";

const BlogsRouter = new Hono();

BlogsRouter.get("/", BulkBlogGet);
BlogsRouter.post("/", BlogCreate);
BlogsRouter.get("/:id", BlogRead);
BlogsRouter.put("/:id", BlogUpdate);
BlogsRouter.delete("/:id", BlogDelete);

export default BlogsRouter;
