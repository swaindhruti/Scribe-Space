import { Hono } from "hono";
import {
  UserSignIn,
  UserSignOut,
  UserSignUp,
  GetUserProfile,
  UpdateUserProfile,
  DeleteUserProfile,
} from "../../controllers/users/controllers";

const UsersRouter = new Hono();

UsersRouter.post("/signup", UserSignUp);
UsersRouter.post("/signin", UserSignIn);
UsersRouter.post("/signout", UserSignOut);
UsersRouter.get("/profile/:username", GetUserProfile);
UsersRouter.put("/profile/:username", UpdateUserProfile);
UsersRouter.delete("/profile/:username", DeleteUserProfile);

export default UsersRouter;
