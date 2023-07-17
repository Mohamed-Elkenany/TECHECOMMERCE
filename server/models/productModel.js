const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Can't be blanck "]
        },
        description: {
            type: String,
            required: [true, "Can't be blanck "]
        },
        price: {
            type: String,
            required: [true, "Can't be blanck "]
        },
        discount: {
            type: String,
        },
        rate: {
            type: Number,
            required: [true, "Can't be blanck "],
            min: [1, "Too short Rate"],
            max: [5, "Too Long Rate"],
        },
        category: {
            type: String,
            required: [true, "Can't be blanck "]
        },
        addLike: {
            type: Boolean,
            default:false,
        },
        picture: {
            type: Array,
            required: true
        },
    }
    ,
    { minimize: false, timestamps: true }
);

const productModel = mongoose.model("product", productSchema);

module.exports = productModel;