import { Context } from "hono";
import { getPrisma } from "../../../lib/prismaClient";
import { AppBindings } from "../../types";
import { setCookie, deleteCookie, getCookie } from "hono/cookie";
import { sign, verify } from "hono/jwt";

const UserSignUp = async (c: Context<AppBindings>) => {
  const prisma = getPrisma(c.env.DATABASE_URL);
  const { name, email, username, password } = await c.req.json();
  const existingUser = await prisma.user.findFirst({
    where: {
      OR: [{ email }, { username }],
    },
  });
  if (existingUser) {
    return c.json({ message: "User already exists" }, 409);
  } else {
    const newUser = await prisma.user.create({
      data: { name, email, username, password },
    });
    if (newUser) {
      return c.json({ message: "User created successfully" });
    } else {
      return c.json({ message: "Failed to create user" });
    }
  }
};

const UserSignIn = async (c: Context<AppBindings>) => {
  const prisma = getPrisma(c.env.DATABASE_URL);
  const { email, password } = await c.req.json();
  const existinguser = await prisma.user.findUnique({
    where: { email },
  });
  if (existinguser) {
    const isPasswordMatch = existinguser.password === password;
    if (isPasswordMatch) {
      const payload = {
        userId: existinguser.id,
        email: existinguser.email,
        username: existinguser.username,
      };

      const token = await sign(payload, c.env.JWT_SECRET);

      setCookie(c, "userId", existinguser.id.toString());
      setCookie(c, "auth_token", token);
      return c.json({ message: "User signed in successfully", token: token });
    } else {
      return c.json({ message: "User doesn't exist" });
    }
  }

  return c.json({ message: "signIn" });
};

const UserSignOut = async (c: Context<AppBindings>) => {
  deleteCookie(c, "userId");
  deleteCookie(c, "auth_token");
  return c.json({ message: "signOut" });
};

const GetUserProfile = async (c: Context<AppBindings>) => {
  try {
    const userId = getCookie(c, "userId");
    const auth_token = getCookie(c, "auth_token");
    if (!userId || !auth_token) {
      return c.json({ message: "User not authenticated" }, 401);
    }
    console.log(typeof userId);
    const payload = await verify(auth_token, c.env.JWT_SECRET);
    console.log(typeof payload.userId);
    console.log(userId == payload.userId);
    if (payload.userId !== parseInt(userId)) {
      return c.json({ message: "User not authenticated" }, 401);
    } else {
      const prisma = getPrisma(c.env.DATABASE_URL);
      const user = await prisma.user.findUnique({
        where: { id: payload.userId },
        select: {
          id: true,
          name: true,
          email: true,
          username: true,
          posts: {
            select: {
              id: true,
              title: true,
              content: true,
              published: true,
            },
          },
        },
      });
      return c.json({
        message: "User details fetched successfully",
        userData: user,
      });
    }
  } catch (e) {
    return c.json({ message: "User not authenticated" }, 401);
  }
};

const UpdateUserProfile = async (c: Context<AppBindings>) => {
  try {
    const userId = getCookie(c, "userId");
    const auth_token = getCookie(c, "auth_token");
    if (!userId || !auth_token) {
      return c.json({ message: "User not authenticated" }, 401);
    }
    const payload = await verify(auth_token, c.env.JWT_SECRET);
    if (payload.userId !== parseInt(userId)) {
      return c.json({ message: "User not authenticated" }, 401);
    } else {
      const prisma = getPrisma(c.env.DATABASE_URL);
      const { name, email, username } = await c.req.json();

      const existingUserData = await prisma.user.findFirst({
        where: {
          OR: [
            { email, id: { not: payload.userId } },
            { username, id: { not: payload.userId } },
          ],
        },
      });

      if (existingUserData) {
        return c.json({ message: "Email or username already taken" }, 409);
      }

      const updatedUser = await prisma.user.update({
        where: { id: payload.userId },
        data: { name, email, username },
      });

      return c.json({
        message: "User details updated successfully",
        userData: updatedUser,
      });
    }
  } catch (e) {
    return c.json({ message: "User not authenticated" }, 401);
  }
};

const DeleteUserProfile = async (c: Context<AppBindings>) => {
  try {
    const userId = getCookie(c, "userId");
    const auth_token = getCookie(c, "auth_token");
    if (!userId || !auth_token) {
      return c.json({ message: "User not authenticated" }, 401);
    }
    const payload = await verify(auth_token, c.env.JWT_SECRET);
    if (payload.userId !== userId) {
      return c.json({ message: "User not authenticated" }, 401);
    } else {
      const prisma = getPrisma(c.env.DATABASE_URL);
      await prisma.user.delete({
        where: { id: parseInt(payload.userId) },
      });
      return c.json({ message: "User deleted successfully" });
    }
  } catch (e) {
    return c.json({ message: "User not authenticated" }, 401);
  }
};

export {
  UserSignUp,
  UserSignIn,
  UserSignOut,
  GetUserProfile,
  UpdateUserProfile,
  DeleteUserProfile,
};
