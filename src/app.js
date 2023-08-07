import dotenv from "dotenv";
import express from "express";

// routes
import homeRouter from "./routes/home";
import userRoute from "./routes/user";

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
    this.app.use("/", homeRouter);
    this.app.use("/users/", userRoute);
  }
}

export default new App().app;
