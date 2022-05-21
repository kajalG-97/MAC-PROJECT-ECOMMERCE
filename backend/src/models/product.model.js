const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        product_name: { type: String, required: true },
        price: { type: Number, required: true},
        category: { type: String, required: true },
        rating: { type: Number, required: true },
        product_image: { type: String, required: true },

    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const Product = mongoose.model("product", productSchema);

module.exports = Product;