import multer from "multer";
import multerConfig from "../config/multer";

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
  async store(req, res) {
    return upload(req, res, (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }

      return res.json(req.file);
    });
  }
}

export default new UploadsController();
