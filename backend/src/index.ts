import { Hono } from "hono";
import BlogsRouter from "./routes/blogs/routes";
import UsersRouter from "./routes/users/routes";

const app = new Hono();

app.route("/api/v1/blogs", BlogsRouter);
app.route("/api/v1/users", UsersRouter);

export default app;
