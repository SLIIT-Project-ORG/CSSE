const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({

    siteId:{
        type:String,
        required:true
    },
    supplierId:{
        type:String,
        required:true
    },
    siteManagerId:{
        type:String,
        required:true
    },
    wareHouseId:{
        type:String,
        required:true
    },
    items:{
        type:Array,
        required:true
    },
    note:{
        type:String
    },
    staffStatus:{
        type:String,
        default:"pending"
    },
    supplierStatus:{
        type:String,
        default:"pending"
    },
    totalAmount:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }

})

const order = mongoose.model("orders",orderSchema);
module.exports = order;