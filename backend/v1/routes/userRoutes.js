const express = require("express");
const { listUsers } = require("../controllers/userController.js");

const router = express.Router();

router.get("/", listUsers);

module.exports = router;
