const express = require("express");
const database = require("./config/databse");
const userRouter = require("./routes/userRouter")
const productRouter = require("./routes/productRouter")
const orderRouter = require("./routes/orderRouter")
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const stripe = require("stripe")('sk_test_51NUBJkJgsCul5s1kH5Zw9LG3chF4ECi11lsnq3Cv5Mt0xH06ttlKfyXKXnsWYI5oaH8OYk2jnSm7qpoODCh1Or0b001Bz4lrNp');
dotenv.config({path:"./config.env"})
const io = new Server(server, {
    cors: "*",
    methods: "*"
});
database();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/api', userRouter);
app.use('/api', productRouter);
app.use('/orders', orderRouter);

app.post('/create-payment', async(req, res)=> {
  const {amount} = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card']
    });
    res.status(200).json(paymentIntent)
  } catch (e) {
    console.log(e.message);
    res.status(400).json(e.message);
   }
})


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`You connect at host : ${PORT}`);
})
