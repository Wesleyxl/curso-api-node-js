import dotenv from "dotenv";
import express from "express";
import homeRouter from "./routes/home";

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
  }
}

export default new App().app;
