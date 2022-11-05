const router= require("express").Router();
let SiteDetails =require("../../models/Site_mgmt/Site");

router.route("/add").post((req,res)=>{
   
    const sitename= req.body.sitename;
    const site_location= req.body.site_location;
    const siteManager= req.body.siteManager; 
    const con_type = req.body.con_type;
    const emp_num = req.body.emp_num;

    const newSiteDetails = new SiteDetails({
        
        sitename,
        site_location,
        siteManager,
        con_type,
        emp_num
    })
    newSiteDetails.save().then(()=>{
        res.json("SiteDetails Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    SiteDetails.find().then((SiteDetailss)=>{
        res.json(SiteDetailss)
    }).catch((err)=>{
        console.log(err)
    })
})
router.route('/update/:id').put((req, res, next) => {
    SiteDetails.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error)
      } else {
        res.json(data)
        console.log('SiteDetails updated successfully !')
      }
    })
  })

router.route("/delete/:id").delete(async(req, res)=>{
    let accId=req.params.id;

    await SiteDetails.findByIdAndDelete(accId)
    .then(()=>{
        res.status(200).send({status:" SiteDetails deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete",error:err.message});
    })
})


router.route('/get/:id').get((req, res) => {
    SiteDetails.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })  
module.exports=router;
