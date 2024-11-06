const mongoose = require("mongoose");

const schema = new mongoose.Schema(
    {
        phone:{
            type:String,
            request: true
        },
        code:{
            type:String,
            request: true
        },
        expTime:{
            type:Number,
            request: true
        },
        // how many times user try
        times:{
            type:Number,
            default: 0
        },
    },
    {
        timestamps: true,
    }
);

const model = mongoose.models.Otp || mongoose.model("Otp", schema);

export default model;