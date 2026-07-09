const express = require("express");
const router = express.Router();

const {
  addProduct,
  getProducts,
  getProductById,
  deleteProduct,
} = require("../controllers/productController");

// Add Product
router.post("/add", addProduct);

// Get All Products
router.get("/all", getProducts);

// Get Product By ID
router.get("/:id", getProductById);

// Delete Product
router.delete("/:id", deleteProduct);

module.exports = router;