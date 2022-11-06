const router= require("express").Router();
let Supplier =require("../models/Supplier");

router.route("/submit").post((req,res)=>{
   
    const name= req.body.name;
    const code= req.body.code;
    const type = req.body.type;
    
  
   
    const newSupplier = new Supplier({
    
        name,
        code,
        type
    })
    newSupplier.save().then(()=>{
        res.json("Successfully Submit the Request")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
  Supplier.find().then((Supplier)=>{
        res.json(Supplier)
    }).catch((err)=>{
        console.log(err)
    })
})
router.route("/update/:id").put(async(req,res)=>{
    let supplierID = req.params.id;
    const{ name,code,type}=req.body;

    const updateSupplier ={

   
        name,
        code,
        type
    }

    const update = await Supplier.findByIdAndUpdate(supplierID,updateSupplier)
    .then(()=>{
        res.status(200).send({status:"Supplier Data Updates Successfully" })
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message});
     
    })
})

 

router.route("/delete/:id").delete(async(req, res)=>{
    let supplierID=req.params.id;

    await Supplier.findByIdAndDelete(supplierID)
    .then(()=>{
        res.status(200).send({status:" Deleted Submitted Supplier"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete",error:err.message});
    })
})


router.route('/:id').get((req, res) => {

    let id = req.params.id;

    Supplier.findById(id)
        .then((data) => {
            res.json(data);
            //console.error(data);
        })
        .catch((err) => {
            res.json(err);
        })

})
module.exports=router;