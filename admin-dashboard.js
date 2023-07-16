const mongoose=requi9re("mongoose")

const avilableMedicines=new mongoose.Schema({
    medicinename:{
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
    qntyav:{
        type:Number
    }
});

    const medDevicess=new mongoose.Schema({
        devicename:{
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

        deviceSp:{
            type:String
        },
        qntyav:{
            type:Number
        }
});

const medPros=new mongoose.Schema({
    doctorName:{
        type:String
    },
    regno:{
        type:Number
    },
    Specialisation:{
        type:String
    },
    Expyears:{
        type:String
    },
    AssToHosp:{
        type:String
    }

    
})