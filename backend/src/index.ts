import { Hono } from "hono";
import BlogsRouter from "./routes/blogs/routes";
import UsersRouter from "./routes/users/routes";
import { AppBindings } from "./types";

const app = new Hono<AppBindings>();

app.route("/api/v1/blogs", BlogsRouter);
app.route("/api/v1/users", UsersRouter);

export default app;
