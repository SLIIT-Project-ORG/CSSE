const mongoose = require("mongoose");

const Inventry = new mongoose.Schema({

    inventory_type: {

        type: String,
        required: true
    },

    inventory_type: {

        type: String,
        required: true
    },
    inventory_location: {

        type: String,
        required: true
    },

    inventory_name: {

        type: String,
        required: true
    },

    inventory_description: {

        type: String,
        required: true

    },

});
const Iinventory = mongoose.model("Inventry", Inventry);
module.exports = Iinventory;