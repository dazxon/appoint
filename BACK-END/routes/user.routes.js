const express = require("express");

const { isNotLogged, isLogged } = require("../middlewares");
const {
  userRegister,
  userLogin,
  userEditByCookie,
  userLogout,
} = require("../controllers/user");

// middlewares

// router express
const userRouter = express.Router();

// routes
userRouter.post("/register", isNotLogged, userRegister);
userRouter.post("/login", isNotLogged, userLogin);
userRouter.put("/edit", isLogged, userEditByCookie);
userRouter.post("/logout", isLogged, userLogout);

// router express export
module.exports = userRouter;
