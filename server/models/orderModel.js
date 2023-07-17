const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    products: {
        type: Object,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    status: {
        type: String,
        default: "processing"
    },
    total: {
        type: Number,
        default: 0,
    },
    count: {
        type: Number,
        default: 0
    },
    date: {
        type: String,
        default: new Date().toISOString().split('T')[0]
    },
    address: {
        type: String
    },
    country: {
        type: String
    },
},
    { timestamps: true, minimize: false });

const orderModel = mongoose.model("Orders", orderSchema);

module.exports = orderModel;