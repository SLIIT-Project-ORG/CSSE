const express = require("express");
require("dotenv/config");
const cors = require("cors");
const bp = require("body-parser");
require("./config/connection");

const app = express();
app.use(cors());
app.use(bp.json());

const PORT = process.env.PORT;

const user = require("./routes/user_mgmt/users");
const order = require("./routes/order_mgmt/orders");

app.use("/user",user);
app.use("/order",order);

app.listen(PORT,()=>{
    console.log(`App is running on PORT `+ PORT)
});