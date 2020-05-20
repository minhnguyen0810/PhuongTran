var express = require("express");
var multer = require("multer");
var controller = require("../controller/user.controller");
var validate = require("../validate/user.validate");
var upload = multer({ dest: "./public/uploads/" });

var router = express.Router();

router.get("/", controller.index);
router.get("/cookie", controller.testCookie);

router.get("/search", controller.search);

router.get("/create", controller.create);

router.get("/:id", controller.view);

router.post(
  "/create",
  upload.single("avatar"),
  validate.postCreate,
  controller.postCreate
);

module.exports = router;
