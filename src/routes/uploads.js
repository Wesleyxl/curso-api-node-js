import { Router } from "express";
import multer from "multer";

import UploadController from "../controllers/UploadController";

import multerConfig from "../config/multer";

const router = new Router();
const upload = multer(multerConfig);
router.post("/", upload.single("file"), UploadController.store);

export default router;
