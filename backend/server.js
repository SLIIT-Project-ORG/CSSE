const express = require("express");
require("dotenv/config");
const cors = require("cors");
const bp = require("body-parser");
require("./config/connection");

const app = express();
app.use(cors());
app.use(bp());

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`App is runniing on PORT `+ PORT)
});