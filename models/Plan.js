const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required: true
    },
    expiredTime:{
        type:Number,
        required:true
    },
    sessionNum:{
        type:Number,
        required:true
    },
    permissions:{
        type:[String],
        required:true
    }
})

const model = mongoose.models.Plan || mongoose.model("Plan",schema)
export default model;