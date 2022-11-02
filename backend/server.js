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
const item = require("./routes/inventry_management/Items");
const inventory = require ("./routes/inventry_management/Inventrys");


app.use("/user",user);
app.use("/item",item);
app.use("/inventory",inventory);

app.listen(PORT,()=>{
    console.log(`App is running on PORT `+ PORT)
});