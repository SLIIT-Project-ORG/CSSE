const router= require("express").Router();
let SupplierRegistration =require("../models/SupplierRegistration");

router.route("/register").post((req,res)=>{
  
    const supplierName= req.body.supplierName;
    const address = req.body.address;
    const contactNumber= req.body.registeredDate;
    const email = req.body.email;
    const registeredDate = req.body.registeredDate;
    const description = req.body.description;
    
  
   
    const newsupplierRegistration = new SupplierRegistration({
 
       supplierName, 
       address,
       contactNumber,
       email,
       registeredDate,
       description 
            
    })
    newsupplierRegistration.save().then(()=>{
        res.json("Successfully Registered the Supplier")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
  SupplierRegistration.find().then((SupplierRegistration)=>{
        res.json(SupplierRegistration)
    }).catch((err)=>{
        console.log(err)
    })
})
router.route("/update/:id").put(async(req,res)=>{
    let supplierId = req.params.id;
    const{ supplierName,
      
       address,
       contactNumber,
       email,
       registeredDate,
       description }=req.body;

    const updateSupplier ={

   
     supplierName,
     address,
     contactNumber,
     email,
     registeredDate,
     description 
          
    }

    const update = await SupplierRegistration.findByIdAndUpdate(supplierId,updateSupplier)
    .then(()=>{
        res.status(200).send({status:"Supplier Updates Successfully" })
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message});
     
    })
})

 

router.route("/delete/:id").delete(async(req, res)=>{
    let supplierId=req.params.id;

    await SupplierRegistration.findByIdAndDelete(supplierId)
    .then(()=>{
        res.status(200).send({status:" Deleted Registered Supplier"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete",error:err.message});
    })
})


router.route('/:id').get((req, res) => {

    let id = req.params.id;

    SupplierRegistration.findById(id)
        .then((data) => {
            res.json(data);
            //console.error(data);
        })
        .catch((err) => {
            res.json(err);
        })

})
module.exports=router;