import dotenv from "dotenv";
import express from "express";

// routes
import homeRouter from "./routes/home";
import userRoute from "./routes/user";
import tokenRoutes from "./routes/token";
import uploadsRouter from "./routes/uploads";

import "./database";

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/uploads/", uploadsRouter);
    this.app.use("/", homeRouter);
    this.app.use("/users/", userRoute);
    this.app.use("/token/", tokenRoutes);
  }
}

export default new App().app;
