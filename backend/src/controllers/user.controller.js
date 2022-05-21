const express = require('express');
const User = require("../models/user");
const router = express.Router();


router.get("", async (req, res) => {
    try {
      
        let users = await User.find().populate({ path: "cart_ids" }).populate({path:"address_ids"}).lean().exec();       
       
        return res.status(200).send({ users });

    } catch (error) {
        return res.status(500).send(error.message)
    }
});



router.patch("/:_id", async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params._id, req.body, { new: true })
        res.send(user);
    } catch (err) {
        console.log('err', err);
    }
});

router.get("/:_id", async (req, res) => {
    try {
        const user = await User.findById(req.params._id).populate({ path: "cart_ids" }).populate({path:"address_ids"});

        return res.send(user);
       
    } catch (err) {
        res.status(520).send(err.message);
    }
});



router.delete("/:_id", async (req, res) => {
    try {
        const users = await User.findByIdAndDelete(req.params._id).lean().exec();

        return res.send({ users });
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
});


module.exports = router;