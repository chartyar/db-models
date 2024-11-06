const mongoose = require("mongoose");
require("./Comment");

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    shortDescription: {
        type: String,
        required: true,
    },
    longDescription: {
        type: String,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
        default: 0,
    },
    sizes: {
        type: [String],
        required: true,
    },
    score: {
        type: Number,
        default: 5
    },
    colors: {
        type: [String],
        required: true,
    },
    images: {
        type: [String],
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    comments: {
        type: [
            {
                type: mongoose.Types.ObjectId,
                ref: "Comment",
            },
        ],
    },
});

const model = mongoose.models.Product || mongoose.model("Product", schema);

export default model;
