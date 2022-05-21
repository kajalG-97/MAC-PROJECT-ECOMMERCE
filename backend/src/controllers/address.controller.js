const express = require('express');
const Address = require("../models/address.model");
const router = express.Router();


router.get("", async (req, res) => {
    try {
      
        let address = await Address.find().lean().exec();       
       
        return res.status(200).send({ address });

    } catch (error) {
        return res.status(500).send(error.message)
    }
});



router.post("", async (req, res) => {
    try {
        const address = await Address.create(req.body);
        res.send(address);

    }
    catch (err) {
        res.send(err.message);
    }
});

router.patch("/:_id", async (req, res) => {
    try {
        const address = await Address.findByIdAndUpdate(req.params._id, req.body, { new: true })
        res.send(address);
    } catch (err) {
        console.log('err', err);
    }
});

router.get("/:_id", async (req, res) => {
    try {
        const address = await Address.findById(req.params._id);

        return res.send(address);
       
    } catch (err) {
        res.status(520).send(err.message);
    }
});



router.delete("/:_id", async (req, res) => {
    try {
        const address = await Address.findByIdAndDelete(req.params._id).lean().exec();

        return res.send({ address });
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
});


module.exports = router;