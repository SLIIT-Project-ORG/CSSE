const router = require("express").Router();
const Wwarehouse = require("../../models/inventry_management/Warehouse");
 

//insert
router.route("/insert").post((req, res) => {

    let warehouse_id = req.body.warehouse_id
    let warehouse_name = req.body.warehouse_name
    let warehouse_address = req.body.warehouse_address
    let warehouse_company= req.body.warehouse_company
    let warehouse_contactno = req.body.warehouse_contactno
   

    const whouseobj = new Wwarehouse({
       
        warehouse_id,warehouse_name,warehouse_address,warehouse_company,warehouse_contactno
      
    });

    whouseobj .save().then(() => {

        res.json("WareHouse Details Successfully Added");

    }).catch((err) => {

        console.log(err);

    });

})


//view
router.route("/").get((req, res) => {

    Wwarehouse.find().then((warehouse) => {
        res.json(warehouse);
    }).catch((err) => {
        console.log(err);
    });

});

//delete
router.route("/delete/:id").delete((req, res) => {

    let warehouse = req.params.id;

    Wwarehouse.findByIdAndDelete(warehouse).then(() => {
        res.json("Delete Warehouse Details successfully");
    }).catch((err) => {
        console.log(err);
    });

});


//update
router.route("/update/:id").put((req, res) => {

    const iid = req.params.id;

    let warehouse_id = req.body.warehouse_id
    let warehouse_name = req.body.warehouse_name
    let warehouse_address = req.body.warehouse_address
    let warehouse_company= req.body.warehouse_company
    let warehouse_contactno = req.body.warehouse_contactno


    const whouseobj = ({

        warehouse_id,warehouse_name,warehouse_address,warehouse_company,warehouse_contactno

 })

    Wwarehouse.findByIdAndUpdate(iid, whouseobj).then((wdata) => {
        res.json(wdata);
    }).catch((err) => {
        console.log(err);
    });

});

//Find one
router.route("/:id").get((req, res) => {

    let id = req.params.id;

    Wwarehouse.findById(id).then((data) => {
        res.json(data);
    }).catch((err) => {
        console.log(err);
    })

});

module.exports = router;