const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
require("dotenv").config();


const userSchema = new mongoose.Schema(
    {
       
        number: { type: String, required: true },

    },
    {
        versionKey: false,
        timestamps: true,
    }
);


userSchema.methods.generateJWT = function () {
    const token = jwt.sign({
        _id: this._id,
        number: this.number
    }, `${process.env.JWT_SECRET_KEY}`, { expiresIn: "7d" });
    return token
}



const User = mongoose.model("user", userSchema);

module.exports = User;