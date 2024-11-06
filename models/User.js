const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: false
    },
    phone:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    IdentificationCode:{
        type: String,
        required: true
    },
    bonus:{
        type: Number,
        required: true
    },
    role:{
        type: String,
        default:"USER"
    }
})

const model = mongoose?.models?.User || mongoose.model('User',schema)

export default model;