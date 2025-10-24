const express = require("express");
const { products } = require("./mock");

const router = express.Router();

// GET /products - retorna todos os produtos mockados.
router.get("/products", (req, res) => {
  res.json(products);
});

module.exports = router;
