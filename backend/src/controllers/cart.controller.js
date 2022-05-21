const express = require('express');
const Cart = require("../models/cart.model");
const router = express.Router();

router.get("", async (req, res) => {
    try {

        let carts = await Cart.find().lean().exec();          

        return res.status(200).send({ carts });
    } catch (error) {
        return res.status(500).send(error.message)
    }
});



router.patch("/:_id", async (req, res) => {
    try {
        const cart = await Cart.findByIdAndUpdate(req.params._id, req.body, { new: true })
        res.send(cart);
    } catch (err) {
        console.log('err', err);
    }
});

router.get("/:_id", async (req, res) => {
    try {
        const cart = await Cart.findById(req.params._id);

        return res.send(cart);
       
    } catch (err) {
        res.status(520).send(err.message);
    }
});


router.post("", async (req, res) => {
    try {
        const cart = await Cart.create(req.body);
        res.send(cart);

    }
    catch (err) {
        res.send(err.message);
    }
});

router.delete("/:_id", async (req, res) => {
    try {
        const cart = await Cart.findByIdAndDelete(req.params._id).lean().exec();

        return res.send({ cart });
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
});


module.exports = router;