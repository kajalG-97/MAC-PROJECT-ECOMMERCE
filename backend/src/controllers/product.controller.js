const express = require('express');
const Product = require("../models/product.model");
const router = express.Router();

router.get("", async (req, res) => {
    try {
        let products;

        const match = {}

        const category = ["girls fashion", "electronic", "mens fashion"];


        category.filter((e) => {
            if (req.query.category === e) {
                match.category = req.query.category;
            }
        });


        const sort = {}

        if (req.query.sortBy && req.query.OrderBy) {
            sort[req.query.sortBy] = req.query.OrderBy === 'desc' ? -1 : 1
        }


        const page = req.query.page || 1;
        const size = req.query.size || 6;

        if (req.query.rating) {
            products = await Product.find({ $and: [match, { rating: { $gte: req.query.rating } }] }).sort(sort).skip((page - 1) * size).limit(size).lean().exec();

        } else {
            products = await Product.find(match).sort(sort).skip((page - 1) * size).limit(size).lean().exec();

        }


        const totalPages = Math.ceil(

            (await Product.find().countDocuments()) / size
        );

        return res.status(200).send({ products, totalPages });

    } catch (error) {
        return res.status(500).send(error.message)
    }
});


router.patch("/:_id", async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params._id, req.body, { new: true })
        res.send(product);
    } catch (err) {
        console.log('err', err);
    }
});


router.get("/:_id", async (req, res) => {
    try {
        const product = await Product.findById(req.params._id);

        return res.send(product);

    } catch (err) {
        res.status(520).send(err.message);
    }
});


router.post("", async (req, res) => {
    try {
        const product = await product.create(req.body);
        res.send(product);

    }
    catch (err) {
        res.send(err.message);
    }
});


router.delete("/:_id", async (req, res) => {
    try {
        const product = await product.findByIdAndDelete(req.params._id).lean().exec();

        return res.send({ product });
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
});


module.exports = router;