const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const siteSchema = new Schema({

    sitename:{
        type:String,
        required:true
    },
    site_location:{
        type:String,
        required:true
    },
    site_id:{
        type:String,
        required:true
    },
    siteManager:{
        type:String,
        required:true
    },
    con_type:{
        type:String,
        required:true
    },
    emp_num:{
        type:String,
        required:true
    }
   

})

const site = mongoose.model("sites",siteSchema);
module.exports = site;