const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({

    siteId:{
        type:String,
        requred:true
    },
    supplierId:{
        type:String,
        required:true
    },
    siteManagerId:{
        type:String,
        required:true
    },
    items:{
        type:Array,
        required:true
    },
    note:{
        type:String,
        required:true
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
        type:String
    },
    date:{
        type:Date
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }

})

const order = mongoose.model("orders",orderSchema);
module.exports = order;