const express = require("express");

const Product = require("../models/product.model");

const router = express.Router();

router.get("/search", async (req, res) => {
    try {
        const query = req.query.search;
        const product = await Product.find({ product_name: { $regex: query, $options: 'i' } });
        console.log({ query });
        return res.status(200).send(product);
    } catch (err) {
        res.status(501).send(err.message);
    }
});

module.exports = router;