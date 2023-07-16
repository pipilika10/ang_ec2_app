const mongoose=require("mongoose")

const userDetails=new mongoose.Schema({
    useremail:{
        type:String
    },
    passworde:{
        type:String
    }
})