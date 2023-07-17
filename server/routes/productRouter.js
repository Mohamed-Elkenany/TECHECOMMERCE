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

// add to cart...

router.post("/add_to_cart", async (req, res) => {
    const { userId, productId, price } = req.body;
    try{
        const user = await userModel.findById(userId);
        const userCart = user.cart;
        if (userCart[productId]) {
            userCart[productId] += 1;
        } else {
            userCart[productId] = 1;
        }
        userCart.count += 1;
        userCart.total = Number(price) + Number(userCart.total);
        user.cart = userCart;
        user.markModified('cart');
        await user.save();
        res.status(200).json(user);
    }catch(e){
        res.status(400).json(e.message);
    }
})

// increase product in cart

router.post("/increase_product_cart", async (req, res) => {
    const { userId, productId, price } = req.body;
    try {
        const user = await userModel.findById(userId);
        const userCart = user.cart;
        userCart[productId] += 1;
        userCart.count += 1;
        userCart.total = Number(price) + Number(userCart.total);
        user.cart = userCart;
        user.markModified('cart');
        await user.save();
        res.status(200).json(user);
    } catch (e) {
        res.status(400).json(e);
    }
});

// increase product in cart by amount..................

router.post("/increase_product_cart_amount", async (req, res) => {
    const { userId, productId, price, amount } = req.body;
    try {
        const user = await userModel.findById(userId);
        const userCart = user.cart;
        if (userCart[productId]) {
            userCart[productId] += amount;
        } else {
            userCart[productId] = amount;
        }
        userCart.count += amount;
        userCart.total = (Number(price) * amount) + Number(userCart.total);
        user.cart = userCart;
        user.markModified('cart');
        await user.save();
        res.status(200).json(user);
    } catch (e) {
        res.status(400).json(e);
    }
});

// decrease user cart

router.post('/decrease_product', async (req, res) => {
    const { userId, productId, price } = req.body;
    try {
        const user = await userModel.findById(userId);
        const userCart = user.cart;
        userCart[productId] -= 1;
        userCart.count -= 1;
        userCart.total = Number(userCart.total) - Number(price);
        if (userCart[productId] < 1) {
            delete userCart[productId];
        }
        user.cart = userCart;
        user.markModified('cart');
        await user.save();
        res.status(200).json(user);
    } catch (e) {
        res.status(400).json(e.message);
    }
});

// remove product cart

router.post('/remove_product', async (req, res) => {
    const { userId, productId, price } = req.body;
    try {
        const user = await userModel.findById(userId);
        const userCart = user.cart;
        userCart.count -= userCart[productId];
        userCart.total -=  (Number(price) * Number(userCart[productId]));
        delete userCart[productId];
        user.cart = userCart;
        user.markModified('cart');
        await user.save();
        res.status(200).json(user);
    } catch (e) {
        res.status(400).json(e.message);
    }
});

// Show Later.........

router.post("/add_to_like", async (req, res) => {
    const { userId, productId } = req.body;
    try{
        const user = await userModel.findById(userId);
        const product = await productModel.findById(productId);
        const productlike = !product.addLike;
        product.addLike = productlike;
        const userlike = user.like;
        userlike[productId] = 1;
        user.like = userlike;
        user.markModified('like');
        user.markModified('addLike');
        await user.save();
        await product.save();
        res.status(200).json(user);
    }catch(e){
        res.status(400).json(e.message);
    }
})

// remove product from watch later........

router.post("/remove_to_like", async (req, res) => {
    const { userId, productId } = req.body;
    try{
        const user = await userModel.findById(userId);
        const product = await productModel.findById(productId);
        const userLike = user.like;
        const productLike = !product.addLike;
        delete userLike[productId];
        product.addLike = productLike;
        user.like = userLike;
        user.markModified('like');
        product.markModified('addLike');
        await user.save();
        await product.save();
        res.status(200).json(user);
    }catch(e){
        res.status(400).json(e.message);
    }
})




module.exports = router;