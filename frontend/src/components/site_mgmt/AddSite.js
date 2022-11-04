import React,{useState} from "react"
import axios from "axios";
import "../styles/Admin.css";

export default function AddSiteDetails(){

    
    const[sitename, setsitename]= useState("");
    const[site_location, setsite_location]= useState("");
    const[siteManager, setsiteManager]= useState("");
    const[emp_num, setemp_num]= useState("");
    const[con_type, setcon_type]= useState("");
   
    

    function sendData(e){
        e.preventDefault();
        const newsitedetail={
          
          sitename,
          site_location,
          siteManager,
          emp_num,
          con_type,
         
        }
        //console.log(newsitedetail);
        axios.post("http://localhost:4000/site/add",newsitedetail).then(()=>{
          alert("Site Detais added")
        }).catch((err)=>{
           alert(err)
        })  
    }

    return(

<div >
<div class="p-5 mb-4 bg-dark rounded-3">
      <div class="container-fluid py-5">
        <h1 class="display-5 text-white fw-bold"> Admin: ADD Site Details</h1>
        <p class="col-md-8 text-white fs-4"></p>
        
      </div>
    </div>
<br></br>
<div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <a href="/" class="btn btn-primary btn-lg active" role="button" aria-pressed="true"> Go Back</a>
            
  
</div>
<br></br>  
     <div >
        <form className="row g-3 needs-validation" novalidate onSubmit={sendData}>
          
          <div className="col-md-4">
            <label for="name" className="form-label">Site Name</label>
            <input type="number" className="form-control " id="validationServer02" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required
             onChange={(e)=>{
                setsitename(e.target.value)

            }}/>
        
          </div>
          

          <div className="col-md-4">
            <label for="type_ID" className="form-label">Site Location</label>
            <input type="number" className="form-control " id="validationServer02" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required
            onChange={(e)=>{
                setsite_location(e.target.value)

            }}/>
              
            
            <div className="valid-feedback">
              
            </div>

          </div>
          <div className="col-md-4">
            <label for="type_ID" className="form-label">Site Manager Name</label>
            <input type="number" className="form-control " id="validationServer02" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required
            onChange={(e)=>{
                setsiteManager(e.target.value)

            }}/>
            
            <div className="valid-feedback">
              
            </div>

          </div>
          <div className="col-md-4">
            <label for="emp_num" className="form-label">Number of Employees</label>
            <input type="number" className="form-control " id="validationServer02" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required
             onChange={(e)=>{
                setemp_num(e.target.value)

            }}/>
           
            <div className="valid-feedback">
              
            </div>

          </div>
          <div className="col-md-4">
            <label for="con_type" className="form-label">Construction Type</label>
              <input type="date" className="form-control " id="validationServer02" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required
              onChange={(e)=>{
                setcon_type(e.target.value)
            }}/>
              <div id="validationServerUsernameFeedback" className="invalid-feedback">
                
              </div>
          </div>
          
         <br/>
          <div className="col-12">
            <button className="btn btn-primary" type="submit">Submit form</button>
          </div>
        </form>
    </div> 
   </div>




      









      
    )
}