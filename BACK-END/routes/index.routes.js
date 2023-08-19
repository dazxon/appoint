const express = require("express");
const userRouter = require("./user.routes");
const invitationRouter = require("./invitation.routes");

const apiRouter = express.Router();

apiRouter.use("/user", userRouter);
apiRouter.use("/invitation", invitationRouter);

module.exports = apiRouter;
