import { Context } from "hono";

const UserSignUp = async (c: Context) => {
  return c.json({ message: "createUser" });
};

const UserSignIn = async (c: Context) => {
  return c.json({ message: "signIn" });
};

const UserSignOut = async (c: Context) => {
  return c.json({ message: "signOut" });
};

const GetUserProfile = async (c: Context) => {
  return c.json({ message: "getUserProfile" });
};

const UpdateUserProfile = async (c: Context) => {
  return c.json({ message: "updateUserProfile" });
};

const DeleteUserProfile = async (c: Context) => {
  return c.json({ message: "deleteUserProfile" });
};

export {
  UserSignUp,
  UserSignIn,
  UserSignOut,
  GetUserProfile,
  UpdateUserProfile,
  DeleteUserProfile,
};
