/* eslint-disable consistent-return */
import multer from "multer";
import multerConfig from "../config/multer";
import File from "../models/File";

const upload = multer(multerConfig).single("file");

/**
 * Sets the destination for uploaded files.
 *
 * @param {Object} req - the request object
 * @param {Object} file - the file object
 * @param {Function} callback - the callback function
 * @return {void}
 */
class UploadsController {
  store(req, res) {
    return upload(req, res, async (error) => {
      try {
        if (error) {
          return res.status(400).json({
            errors: [error.code],
          });
        }

        const { originalname, filename } = req.file;
        const { student_id } = req.body;
        const file = await File.create({
          student_id,
          original_name: originalname,
          file_name: filename,
        });

        return res.json(file);
      } catch (e) {
        res.status(400).json({
          errors: e.errors.map((err) => err.message),
        });
      }
    });
  }
}

export default new UploadsController();
