const router = require("express").Router();
const Order = require("../../models/order_mgmt/Order");
const Site = require("../../models/Site_mgmt/Site");
const User = require("../../models/user_mgmt/User");

router.route("/create").post(async (req, res) => {

    const orderReq = req.body;

    if (orderReq.siteId != "" && orderReq.siteManagerId != "") {

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

// router.route("/count").post(async (req, res) => {

//     let obj = req.body.items;
//     let totalItem = 0;
//     let len = obj.length;
//     let totalAmount = 0;

//     for (var i = 0; i < len; i++) {
//         totalItem = totalItem + obj[i].quantity;
//         totalAmount = totalAmount + (obj[i].item_price * obj[i].quantity);
//     }
//     console.log("Count " + totalItem);
//     console.log("totalAmount : " + totalAmount);
//     res.json({ "totalItems": totalItem,"totalAmount":totalAmount});
// })

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

router.route("/getBySupplierStatusAndStaffStatus/:supplierStatus/:staffStatus").get(async (req, res) => {
    Order.find({
        supplierStatus:req.params.supplierStatus,
        staffStatus:req.params.staffStatus
    })
        .then((data) => {
            res.json({ data: data });
            console.log({ data: data });
        }).catch((err) => {
            res.json(err.message);
            console.log(err.message);
        })
})

// router.route("/orderWithIdData").get(async (req, res) => {

//     const user = null;
//     const site = null;
//     const supplier = null;

//     Order.find()
//         .then(async(data) => {

//             data.map((val,ind) => {
//                 user = User.findOne({_id:val.siteManagerId});
//                 site = Site.findOne({_id:val.siteId});
//                 supplier = User.findOne({_id:val.supplierId});
//             });

//             res.json({ data: data,user:user,site:site,supplier:supplier});
//             console.log({ data: data });
//         }).catch((err) => {
//             res.json(err);
//             console.log(err);
//         })
// })

router.route("/:id").delete((req,res)=>{

    

})

module.exports = router;