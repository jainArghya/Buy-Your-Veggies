const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
    {
        userId: {type: String, required: true},
        products: [
            {
                productId:{type: String},
                productTitle: {type: String},
                quantity:{type: Number, default: 1},
                price: {type: Number},
                img: {type: String}
            }
        ]
    },
    {timestamps: true}
);

module.exports = mongoose.model("Cart", cartSchema);
