const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        mobile: { type: Number, required: true },
        address: { type: String, required: true },
       
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const Address = mongoose.model("address", addressSchema);

module.exports = Address;