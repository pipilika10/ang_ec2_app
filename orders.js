const mongoose=require("mongoose")

const orders=new mongoose.Schema({
    order_category:{
        type:String
    },
    prodct_name:{
        type:String
    },
    batchno:{
        type:Number
    },
    manCompany:{
        type:String
    },
    targetDisease:{
        type:String
    },
    Exdt:{
        type:String
    },
    amount:{
        type:Number
    }

})