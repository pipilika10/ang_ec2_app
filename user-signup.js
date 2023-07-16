
const mongoose=requi9re("mongoose");

const avilableMedicines=new mongoose.Schema({
    username:{
        type:String
    },
    age:{
        type:Number
    },
    useremail:{
        type:String
    },
    password:{
        type:String
    },
    contact:{
        type:String
    },
    address:{
        type:String
    },

    gender:{
        type:String
    },

    dailydose:{
        type:String
    },
    services:{
        type:String
    },
    accNo:{
        type:Number
    },
    feedback:{
        type:String
    }

})