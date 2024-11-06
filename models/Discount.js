const mongoose = require("mongoose");
require("./User")

const schema = new mongoose.Schema(
    {
        code: {
            type: String,
            required: true,
        },
        percent: {
            type: Number,
            required: true,
        },
        maxUse: {
            type: Number,
            required: true,
        },
        uses: {
            type: Number,
            default: 0
        },
        users: {
            type: [{
                type: mongoose.Types.ObjectId,
                ref:"User"
            }]
        }
    },
    {
        timestamps: true,
    }
);

const model = mongoose.models.Discount || mongoose.model("Discount", schema);

export default model;
