const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const OTPSchema = new mongoose.Schema(
    {
        number: { type: String, required: true },
        otp: { type: String, required: true }
    },
    {
        createdAt: { type: Date, default: Date.now, index: { expires: 300 } }
    }, {
    versionKey: false,
    timestamps: true,
    }
);


const Otp =  mongoose.model("OTP",OTPSchema);

module.exports= Otp;
