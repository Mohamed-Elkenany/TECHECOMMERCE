const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "is require"]
        },
        email: {
            type: String,
            required: [true, "is require"],
            unique: true,
            index: true,
            validate: {
                validator: function (str) {
                    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(str);
                },
                message: prop => `${prop.value} is not a email`
            }
        },
        password: {
            type: String,
            required: [true, "is require"],
        },
        image: {
            type: String,
            required: [true, "is require"],
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        cart: {
            type: Object,
            default: {
                total: 0,
                count: 0,
            }
        },
        notifications: {
            type: Array
        },
        watchList: {
            type: Array
        },
        order: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }]
    },
    { minimize: false, timestamps: true }
)

userSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 12);
    next();
})

userSchema.pre("remove", (next) => {
    this.model("Order").remove({ owner: this._id }, next);
})

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;