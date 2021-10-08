const router = require("express").Router();
const Product = require("../models/productModel");

router.get("/", async (req, res) => {
  try {
    const products = await Product.find({});
    res.send(products);
  } catch (err) {
    res.send(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.send(product);
  } catch (err) {
    res.send(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.send(product);
  } catch (err) {
    res.send(err);
  }
});

router.post("/product/addproduct", async (req, res) => {
  try {
    const product = new Product({
      name: req.body.name,
      image: req.body.img,
      category: req.body.category,
      description: req.body.des,
      price: req.body.price,
    });
    const newProduct = await product.save();
    res.send(newProduct);
  } catch (err) {
    res.send(err);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      category: req.body.category,
      image: req.body.img,
      price: req.body.price,
      description: req.body.des,
    });
    res.send(product);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
