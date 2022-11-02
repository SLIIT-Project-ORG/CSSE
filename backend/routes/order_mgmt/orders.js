const router = require("express").Router();
const Order = require("../../models/order_mgmt/Order");

router.route("/create").post(async (req, res) => {

    const orderReq = req.body;

    if (orderReq.siteId != null && orderReq.siteManagerId != null && orderReq.wareHouseId != null) {
        await Order.create(orderReq)
            .then((data) => {
                res.json({ message: "Order created successfully", data: data });
                console.log({ message: "Order created successfully", data: data })
            }).catch((err) => {
                res.json({ message: "Order creation failed", data: err.message });
                console.log({ message: "Order creation failed", data: err.message })
            })
    } else {
        res.json({ message: "IDs cannot be null or empty" });
    }

})

router.route("/").get(async (req, res) => {
    Order.find()
        .then((data) => {
            res.json({ data: data });
            console.log({ data: data });
        }).catch((err) => {
            res.json(err.message);
            console.log(err.message);
        })
})

router.route("/:id").get(async (req, res) => {
    Order.findById(req.params.id)
        .then((data) => {
            res.json({ data: data });
            console.log({ data: data });
        }).catch((err) => {
            res.json(err.message);
            console.log(err.message);
        })
})

router.route("/count").post(async(req,res)=>{

    let obj = req.body.items;
    let totalItem = 0;
    let len = obj.length;

    for(var i=0; i < len; i++){
        totalItem = totalItem + obj[i].quantity;
    }
    console.log("Count " + totalItem);
    res.json({"totalItems":totalItem});
})

router.route("/setStatus/:id/:status").put(async(req,res)=>{

    const id = req.params.id;
    const status = req.params.status;

    Order.findByIdAndUpdate(id,{status:status})
    .then(()=>{
        res.json("Order " + id + " is " + status);
    }).catch((err)=>{
        res.json(err.message);
    })

})

router.route("/update/:id").put(async(req,res)=>{

    const id = req.params.id;
    const data = req.body;

    Order.findByIdAndUpdate(id,data)
    .then(()=>{
        res.json("Order Updated Successfully");
    }).catch((err)=>{
        res.json(err.message);
    })

})

module.exports = router;