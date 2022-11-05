const mongoose = require("mongoose");

const warehouse = new mongoose.Schema({

    warehouse_id: {

        type: String,
        required: true
    },

    warehouse_name: {

        type: String,
        required: true
    },
    warehouse_address: {

        type: String,
        required: true
    },

    warehouse_company: {

        type: String,
        required: true
    },

    warehouse_contactno: {

        type: String,
        required: true

    },

});
const Wwarehouse = mongoose.model("WareHouse", warehouse);
module.exports = Wwarehouse;

