const express = require("express");

const { invitationCreate } = require("../controllers/invitation");

const invitationRouter = express.Router();

const { isLogged, isAdmin } = require("../middlewares");

invitationRouter.post("/create", isLogged, invitationCreate);

module.exports = invitationRouter;
