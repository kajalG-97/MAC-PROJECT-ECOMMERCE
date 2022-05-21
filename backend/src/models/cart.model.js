const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
    {
        product_name: { type: String, required: true },
        price: { type: Number, required: true },
        category: { type: String, required: true },
        rating: { type: Number, required: true },
        qty: { type: Number, required: true },
        product_image: { type: String, required: true },

    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart;