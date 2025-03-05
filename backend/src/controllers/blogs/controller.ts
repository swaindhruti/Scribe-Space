import { Context } from "hono";

const BulkBlogGet = async (c: Context) => {
  return c.json({ message: "bulkBlogGet" });
};

const BlogCreate = async (c: Context) => {
  return c.json({ message: "createBlog" });
};

const BlogRead = async (c: Context) => {
  return c.json({ message: "readBlog" });
};

const BlogUpdate = async (c: Context) => {
  return c.json({ message: "updateBlog" });
};

const BlogDelete = async (c: Context) => {
  return c.json({ message: "deleteBlog" });
};

export { BulkBlogGet, BlogCreate, BlogRead, BlogUpdate, BlogDelete };
