const multer = require("multer");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: 'dv6jxstce',
  api_key: 899768461587241,
  api_secret: 'qj2MuRYRc1T0tmt8a82Ssbcr49M'
});

const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "demo",
  allowedFormats: ["jpg", "png"],
});

const parser = multer({ 
  storage: storage,
  fileFilter: function (req, file, cb) {
    console.log(file.mimetype === 'image/jpeg')
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      req.fileValidationError = true;
      return cb(null, false, new Error('Wrong file type uploaded'));
    }
    cb(null, true);
  }
});

module.exports = parser