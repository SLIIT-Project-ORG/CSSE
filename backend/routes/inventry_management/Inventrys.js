const router = require("express").Router();
const Iinventory = require("../../models/inventry_management/Inventry");
 

//insert
router.route("/insert").post((req, res) => {

    let inventory_id = req.body.inventory_id
    let inventory_type = req.body.inventory_type
    let inventory_location = req.body.inventory_location
    let inventory_name= req.body.inventory_name
    let inventory_description = req.body.inventory_description
   

    const inventryobj = new Iinventory({

       inventory_id,inventory_type,inventory_location,inventory_name,inventory_description

    });

    inventryobj .save().then(() => {

        res.json("Inventry Details Successfully Added");

    }).catch((err) => {

        console.log(err);

    });

})


//view
router.route("/").get((req, res) => {

    Iinventory.find().then((inventory) => {
        res.json(inventory );
    }).catch((err) => {
        console.log(err);
    });

});

//delete
router.route("/delete/:id").delete((req, res) => {

    let inventory = req.params.id;

    Iinventory.findByIdAndDelete(inventory).then(() => {
        res.json("Delete Inventory Details successfully");
    }).catch((err) => {
        console.log(err);
    });

});


//update
router.route("/update/:id").put((req, res) => {

    const iid = req.params.id;

    let inventory_id = req.body.inventory_id
    let inventory_type =req.body.inventory_type
    let inventory_location =req.body.inventory_location
    let inventory_name=req.body.inventory_name
    let inventory_description =req.body.inventory_description


    const inventryobj = ({

        inventory_id,inventory_type,inventory_location,inventory_name,inventory_description

 })

    Iinventory.findByIdAndUpdate(iid, inventryobj).then((pdata) => {
        res.json(pdata);
    }).catch((err) => {
        console.log(err);
    });

});

//Find one
router.route("/:id").get((req, res) => {

    let id = req.params.id;

    Iinventory.findById(id).then((data) => {
        res.json(data);
    }).catch((err) => {
        console.log(err);
    })

});

module.exports = router;