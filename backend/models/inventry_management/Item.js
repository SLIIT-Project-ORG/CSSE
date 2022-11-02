const mongoose = require("mongoose");

const Item = new mongoose.Schema({
    item_id:{

        type: String,
        required: true

    },

    item_name: {

        type: String,
        required: true
    },

    
    item_code: {

        type: String,
        required: true
    },

    item_price: {

        type: String,
        required: true
    },

    supplier_id: {

        type: String,
        required: true

    },
    item_count:{
      
        type:String,
        required: true

    }

});
const IItem = mongoose.model("Item", Item);
module.exports = IItem;