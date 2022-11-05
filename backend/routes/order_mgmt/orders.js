const router = require("express").Router();
const Order = require("../../models/order_mgmt/Order");

router.route("/create").post(async (req, res) => {

    const orderReq = req.body;

    if (orderReq.siteId != null && orderReq.siteManagerId != null && orderReq.wareHouseId != null) {

        let total = parseFloat(orderReq.totalAmount);

        if (total <= 100000) {
            orderReq.staffStatus = "approve";
        }

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

router.route("/count").post(async (req, res) => {

    let obj = req.body.items;
    let totalItem = 0;
    let len = obj.length;

    for (var i = 0; i < len; i++) {
        totalItem = totalItem + obj[i].quantity;
    }
    console.log("Count " + totalItem);
    res.json({ "totalItems": totalItem });
})

router.route("/setStatus/:id/:staffStatus/:supplierStatus").put(async (req, res) => {

    const id = req.params.id;
    const staffStatus = req.params.staffStatus;
    const supplierStatus = req.params.supplierStatus;

    Order.findByIdAndUpdate(id, { staffStatus: staffStatus, supplierStatus: supplierStatus })
        .then(() => {
            res.json("Order " + id + " staff status is " + staffStatus + " and supplier status is " + supplierStatus);
        }).catch((err) => {
            res.json(err.message);
        })
})

router.route("/update/:id").put(async (req, res) => {

    const id = req.params.id;
    const data = req.body;

    Order.findByIdAndUpdate(id, data)
        .then(() => {
            res.json("Order Updated Successfully");
        }).catch((err) => {
            res.json(err.message);
        })

})


router.route("/getByStaffStatus/:staffStatus").get(async (req, res) => {
    Order.find({
        staffStatus:req.params.staffStatus,
    })
        .then((data) => {
            res.json({ data: data });
            console.log({ data: data });
        }).catch((err) => {
            res.json(err.message);
            console.log(err.message);
        })
})

router.route("/getBySupplierStatus/:supplierStatus").get(async (req, res) => {
    Order.find({
        supplierStatus:req.params.supplierStatus,
    })
        .then((data) => {
            res.json({ data: data });
            console.log({ data: data });
        }).catch((err) => {
            res.json(err.message);
            console.log(err.message);
        })
})

module.exports = router;