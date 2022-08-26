const express = require("express");

const { getProducts, saveProduct } = require("../controllers/products.controller");

const router = express.Router();

router.get("/products", getProducts);
  
// POST Data
router.post("/products", saveProduct);

 module.exports = router;