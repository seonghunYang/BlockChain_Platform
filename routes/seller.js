var express = require("express");
var router = express.Router();
const catchErrors = require("../lib/async-error");
const Seller = require("../models/seller");
const multer = require("multer");
const fs = require("fs-extra");
const path = require("path");
function needAuth(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect("/authLayout?title=login");
  }
}
const mimetypes = {
  "image/jpeg": "jpg",
  "image/gif": "gif",
  "image/png": "png",
};
const upload = multer({
  dest: "tmp",
  fileFilter: (req, file, cb) => {
    var ext = mimetypes[file.mimetype];
    if (!ext) {
      return cb(new Error("Only image files are allowed!"), false);
    }
    cb(null, true);
  },
});

router.put(
  "/:id",
  needAuth,
  upload.single("img"),
  catchErrors(async (req, res, next) => {
    var seller = await Seller.findById(req.params.id);

    seller.nickName = req.body.nickName;
    seller.sellerIntro = req.body.sellerIntro;
    seller.phone = req.body.phone;
    seller.major = [];

    if (req.body.design) {
      seller.major.push(req.body.design);
    }
    if (req.body.programming) {
      seller.major.push(req.body.programming);
    }
    if (req.body.photo) {
      seller.major.push(req.body.photo);
    }
    if (req.file) {
      const dest = path.join(__dirname, "../public/images/uploads/"); // 옮길 디렉토리
      console.log("File ->", req.file); // multer의 output이 어떤 형태인지 보자.
      const filename = seller.id + "/" + req.file.originalname;
      await fs.move(req.file.path, dest + filename);
      seller.img = "/images/uploads/" + filename;
    }
    await seller.save();

    req.flash("success", "정보를 수정했습니다.");
    res.redirect("/");
  })
);
module.exports = router;
