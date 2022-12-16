import "reflect-metadata";
import express from "express";
import "express-async-errors";
import handleError from "./error/handleError";
import userRouters from "./routers/users.routes";
import loginRoutes from "./routers/login.routes";

const app = express();
app.use(express.json());
app.use("/users", userRouters);
app.use("/login", loginRoutes);

app.use(handleError);
export default app;
