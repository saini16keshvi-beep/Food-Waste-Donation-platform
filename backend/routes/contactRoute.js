const express = require("express");
const { addContact } = require("../controllers/contactController");

const contactRouter = express.Router();

contactRouter.post("/contact", addContact);

module.exports = contactRouter;