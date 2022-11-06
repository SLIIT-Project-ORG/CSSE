const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const supplierRegistrationSchema = new Schema({

    
    supplierName:{
        type:String,
        required:true
    } ,
    address:{
        type:String,
        required:true
    },
    contactNumber:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    registeredDate:{
        type:Date,
        required:true
    },
    description:{
        type:String,
        required:true
    } 
})

const SupplierRegistration= mongoose.model("SupplierResitration" ,supplierRegistrationSchema );

module.exports=SupplierRegistration;