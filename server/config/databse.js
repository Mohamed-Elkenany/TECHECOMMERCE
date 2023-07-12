const mongoose = require("mongoose");

const database = async () => {
    await mongoose.connect(process.env.URL_DATABASE).then(connect => {
        console.log(`successful connection you host : ${connect.connection.host}`);
    }).catch(error => {
        console.error(`connection error : ${error}`);
    })
}

module.exports = database;