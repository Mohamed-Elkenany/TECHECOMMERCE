const mongoose = require("mongoose");
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
        hashPassword: {
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
        like: {
            type: Object,
            default: {
                count:0,
            }
        },
        order: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Orders' }],
    },
    { minimize: false, timestamps: true }
)


userSchema.pre("remove", (next) => {
    this.model("Order").remove({ owner: this._id }, next);
})

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;