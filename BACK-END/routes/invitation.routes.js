const express = require("express");

const {
  invitationCreate,
  deleteAll,
  deleteById,
} = require("../controllers/invitation");

const invitationRouter = express.Router();

const { isLogged, isAdmin } = require("../middlewares");

invitationRouter.post("/create", isLogged, isAdmin, invitationCreate);
invitationRouter.delete("/delete/all", isLogged, isAdmin, deleteAll);
invitationRouter.delete("/delete/:id", isLogged, isAdmin, deleteById);

module.exports = invitationRouter;
