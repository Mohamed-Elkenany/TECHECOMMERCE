const router = require("express").Router();
const productModel = require("../models/productModel");
const userModel = require("../models/userModel");



// post product.........................................

router.post("/:id/product", async (req, res) => {
    const { id } = req.params;
    const { name, description, category, rate, price, images: picture, discount } = req.body;
    try {
        const product = await productModel.create({ name, description, category, rate, price, picture, discount });
        res.status(200).json(product);
    } catch (e) {
        res.status(400).send(e.message);
    }
});

// get all product ..........................................

router.get("/product", async (req, res) => {
    try {
        const product = await productModel.find({});
        res.status(200).json(product);
    } catch(e) {
        res.status(400).send(e.message);
    }
})

// get product by id...........................................
router.get("/product/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const product = await productModel.findById(id);
        res.status(200).json(product);
    } catch(e) {
        res.status(400).send(e.message);
    }
});

// update product.............................................

router.patch("/product/:id", async (req, res) => {
    const { id } = req.params;
    const { name, description, category, price,rate ,images: picture } = req.body;
    try {
        const product = await productModel.findByIdAndUpdate(id, { name, description, category, price, rate, images: picture }, { new: true });
        res.status(200).json(product);
    } catch(e) {
        res.status(400).send(e.message);
    }
});

// deleted product................................................

router.delete("/product/:id", async (req, res) => {
    const { id } = req.params;
    const { name, description, category, price, picture } = req.body;
    try {
        const product = await productModel.findByIdAndDelete(id);
        res.status(200).json(product);
    } catch(e) {
        res.status(400).send(e.message);
    }
});






module.exports = router;