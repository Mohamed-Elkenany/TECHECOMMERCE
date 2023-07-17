const express = require("express");
const router = express.Router();
const orderModel = require("../models/orderModel");
const userModel = require("../models/userModel");


router.post('/', async (req, res) => {
    const { userId, cart, country, address } = req.body;
    try {
        const user = await userModel.findById(userId);
        const order = await orderModel.create({ owner: user._id, products: cart, country, address });
        order.count = cart.count;
        order.total = cart.total;
        await order.save();
        user.cart = {
            count: 0,
            total: 0,
        };
        user.order.push(order);
        user.markModified('order');
        await user.save();
        res.status(200).json(user);
    } catch (e) {
        res.status(400).json(e.message)
    }
})


// get orders..........................

router.get('/', async(req, res) => {
    try {
        const orders = await orderModel.find().populate("owner", ['email', 'name']);
        res.status(200).json(orders);
    } catch (e){
        res.status(400).json(e.message);
}
})

module.exports = router;