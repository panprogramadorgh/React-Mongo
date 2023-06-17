import express from "express";
import morgan from "morgan";
import cors from "cors";
import {
  globalErrorHandler,
  mongoValidationErrorHandler,
} from "./middleware/errorMiddlewares.js";
import {
  routeNotFound,
  databaseDisconnectedHandler,
} from "./middleware/middlewares.js";
import indexRouter from "./router/index.router.js";

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(databaseDisconnectedHandler);
app.use("/api/users", indexRouter);
app.use(routeNotFound);
// error middlewares
app.use(mongoValidationErrorHandler);
app.use(globalErrorHandler);

export default app;
