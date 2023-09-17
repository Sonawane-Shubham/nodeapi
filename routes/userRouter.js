const express = require("express");

const router = express.Router();

const {
  handlePostSignupUser,
  handlePostLoginUser,
  handlePostForgotPasswordUser,
} = require("../controllers/userControllers");

//post a single user in db

router.post("/signup", handlePostSignupUser);

router.post("/login", handlePostLoginUser);
router.post("/forgot-password", handlePostForgotPasswordUser);

//get single user data
// router.get("/:id", handleGetUserById);

module.exports = router;
