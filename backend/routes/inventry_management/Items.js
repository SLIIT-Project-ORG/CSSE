const router = require("express").Router();
const IItem = require ("../../models/inventry_management/Item")
 

//insert
router.route("/insert").post((req, res) => {
    
    let item_id   = req.body.item_id
    let item_name = req.body.item_name
    let item_code = req.body.item_code
    let item_price = req.body.item_price
    let supplier_id= req.body.supplier_id
    let item_count = req.body.item_count
   

    const itemobj = new IItem({

      item_name,item_code,item_price,supplier_id,item_count,item_id

    });

    itemobj.save().then(() => {

        res.json("Item Details Successfully Added");

    }).catch((err) => {

        console.log(err);

    });

})


//view
router.route("/").get((req, res) => {

    IItem.find().then((item) => {
        res.json(item);
    }).catch((err) => {
        console.log(err);
    });

});

//delete
router.route("/delete/:id").delete((req, res) => {

    let item = req.params.id;

    IItem.findByIdAndDelete(item).then(() => {
        res.json("Delete Item Details successfully");
    }).catch((err) => {
        console.log(err);
    });

});


//update
router.route("/update/:id").put((req, res) => {

    const iid = req.params.id;

    let item_id   = req.body.item_id
    let item_name = req.body.item_name
    let item_code = req.body.item_code
    let item_price = req.body.item_price
    let supplier_id= req.body.supplier_id
    let item_count = req.body.item_count


    const itemobj = ({

        item_name,item_code,item_price,supplier_id,item_count,item_id

 })

    IItem.findByIdAndUpdate(iid, itemobj).then((pdata) => {
        res.json(pdata);
    }).catch((err) => {
        console.log(err);
    });

});

//Find one
router.route("/:id").get((req, res) => {

    let id = req.params.id;

    IItem.findById(id).then((data) => {
        res.json(data);
    }).catch((err) => {
        console.log(err);
    })

});

module.exports = router;