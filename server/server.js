const express = require("express");
const database = require("./config/databse");
const userRouter = require("./routes/userRouter")
const productRouter = require("./routes/productRouter")
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
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

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`You connect at host : ${PORT}`);
})
