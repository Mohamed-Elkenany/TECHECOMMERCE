const userModel = require('../models/userModel')
const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
// create user..................................................................
router.post("/signup", async (req, res) => {
    const { name, email, password, isAdmin,image } = req.body;
    try {
        const hashPassword = await bcrypt.hash(password, 12);
        const users = await userModel.create({ name, email, hashPassword, isAdmin, image });
        res.status(200).json( users );
    } catch (e) {
        if (e.code === 11000) return res.status(400).send('Email already exists');
        res.status(400).send(e.message);
    }
})

// login..................................................................................

router.post("/login", async (req, res) => {
    const { email } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (await bcrypt.compare(req.body.password, user.hashPassword)) {
            res.status(200).json(user);
        } else {
            res.status(400).send("password or email is not correct")
        }
        
    } catch (e) {
        res.status(400).send(e.message);
    }
});

// get users.......................................................................

router.get("/users", async (req, res) => {
    try {
        const users = await userModel.find({ isAdmin: false }).populate("order");
        res.status(200).json(users)
    } catch (e) {
        res.status(400).send(e.message);
    }
})
router.get("/all_users", async (req, res) => {
    try {
        const users = await userModel.find({});
        res.status(200).json(users)
    } catch (e) {
        res.status(400).send(e.message);
    }
})
router.get("/user/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const users = await userModel.findById(id);
        res.status(200).json(users)
    } catch (e) {
        res.status(400).send(e.message);
    }
})


router.get('/user/:id/orders', async (req, res) => {
    const {id} = req.params;
    try{
        const user = await userModel.findById(id).populate("order");
        res.status(200).json(user);
    }catch(e){
        res.status(400).json(e.message);
    }
})
module.exports = router;