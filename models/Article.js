const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    shortLink:{
        type:String,
        required:true
    },
    score:{
        type:Number,
        default:5
    },
    body:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const model = mongoose.models.Article || mongoose.model("Article",schema)
export default model;