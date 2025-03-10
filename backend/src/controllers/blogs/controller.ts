import { Context } from "hono";
import { getPrisma } from "../../../lib/prismaClient";
import { AppBindings } from "../../types";
import { getCookie } from "hono/cookie";
import { verify } from "hono/jwt";

const BulkBlogGet = async (c: Context<AppBindings>) => {
  try {
    const prisma = getPrisma(c.env.DATABASE_URL);
    const AllBlogs = await prisma.post.findMany({
      orderBy: {
        id: "desc",
      },
    });
    return c.json(AllBlogs);
  } catch (e) {
    return c.json({ message: "Failed to fetch blogs" });
  }
};

const BlogCreate = async (c: Context) => {
  try {
    const userId = getCookie(c, "userId");
    const auth_token = getCookie(c, "auth_token");
    if (!userId || !auth_token) {
      return c.json({ message: "Unauthorized" }, 401);
    }
    const payload = await verify(auth_token, c.env.JWT_SECRET);
    if (payload.userId !== parseInt(userId)) {
      return c.json({ message: "Unauthorized" }, 401);
    } else {
      const prisma = getPrisma(c.env.DATABASE_URL);
      const { title, content } = await c.req.json();
      const newBlog = await prisma.post.create({
        data: {
          title,
          content,
          authorId: payload.userId,
        },
      });
    }
    return c.json({ message: "createBlog" });
  } catch (e) {
    return c.json({ message: "Failed to create blog" });
  }
};

const BlogRead = async (c: Context) => {
  try {
    const userId = getCookie(c, "userId");
    const auth_token = getCookie(c, "auth_token");
    if (!userId || !auth_token) {
      return c.json({ message: "Unauthorized" }, 401);
    }
    const payload = await verify(auth_token, c.env.JWT_SECRET);
    if (payload.userId !== parseInt(userId)) {
      return c.json({ message: "Unauthorized" }, 401);
    } else {
      const prisma = getPrisma(c.env.DATABASE_URL);
      const id = c.req.param("id");
      if (!id) {
        return c.json({ message: "Invalid blog id" });
      }
      const blog = await prisma.post.findUnique({
        where: {
          id: parseInt(id),
        },
      });
      return c.json({ message: "blog fetched", blog });
    }
  } catch (e) {
    return c.json({ message: "Failed to read blog" });
  }
};

const BlogUpdate = async (c: Context) => {
  try {
    const userId = getCookie(c, "userId");
    const auth_token = getCookie(c, "auth_token");
    if (!userId || !auth_token) {
      return c.json({ message: "Unauthorized" }, 401);
    }
    const payload = await verify(auth_token, c.env.JWT_SECRET);
    if (payload.userId !== parseInt(userId)) {
      return c.json({ message: "Unauthorized" }, 401);
    } else {
      const prisma = getPrisma(c.env.DATABASE_URL);
      const id = c.req.param("id");
      if (!id) {
        return c.json({ message: "Invalid blog id" });
      }
      const { title, content } = await c.req.json();
      const updatedBlog = await prisma.post.update({
        where: {
          id: parseInt(id),
        },
        data: {
          title,
          content,
        },
      });
      return c.json({ message: "updateBlog", updatedBlog });
    }
  } catch (e) {
    return c.json({ message: "Failed to update blog" });
  }
};

const BlogDelete = async (c: Context) => {
  try {
    const userId = getCookie(c, "userId");
    const auth_token = getCookie(c, "auth_token");
    if (!userId || !auth_token) {
      return c.json({ message: "Unauthorized" }, 401);
    }
    const payload = await verify(auth_token, c.env.JWT_SECRET);
    if (payload.userId !== parseInt(userId)) {
      return c.json({ message: "Unauthorized" }, 401);
    } else {
      const prisma = getPrisma(c.env.DATABASE_URL);
      const id = c.req.param("id");
      if (!id) {
        return c.json({ message: "Invalid blog id" });
      }
      const deletedBlog = await prisma.post.delete({
        where: {
          id: parseInt(id),
        },
      });
      return c.json({ message: "deleteBlog", deletedBlog });
    }
  } catch (e) {
    return c.json({ message: "Failed to delete blog" });
  }
};

export { BulkBlogGet, BlogCreate, BlogRead, BlogUpdate, BlogDelete };
