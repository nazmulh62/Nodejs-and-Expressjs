const express = require("express");

const { getUsers, saveUser } = require("../controllers/users.controller");

const router = express.Router();

router.get("/users", getUsers);
  
// POST Data
router.post("/users", saveUser);

 module.exports = router;