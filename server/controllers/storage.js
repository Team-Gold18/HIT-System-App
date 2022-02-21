const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: "dgug9hpom",
  api_key: "576749212195543",
  api_secret: "pchch1ofrNBHfAcaHjZf-SvRtOg",
});

const diskStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  filename: (req, file, cb) => {
    const mimeType = file.mimetype.split("/");
    const fileType = mimeType[1];
    const fileName = file.originalname + Date.now() + "." + fileType;
    cb(null, fileName);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
  allowedMimeTypes.includes(file.mimetype) ? cb(null, true) : cb(null, false);
};

const storage = multer({ storage: diskStorage, fileFilter: fileFilter }).single(
  "image"
);

module.exports = storage;
