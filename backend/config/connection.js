const mongoose = require("mongoose");

const MONGOURL = process.env.MONGOURL;

mongoose.connect(MONGOURL)
.then(()=>{
    console.log("DB Connected");
})
.catch((err)=>{
    console.log(err.message);
})