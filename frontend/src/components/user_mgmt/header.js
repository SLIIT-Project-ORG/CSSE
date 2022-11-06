import React from "react";
import '../../styles/Header.css'
import  HomeImage from '../../images/home.png'
import HomeImage1 from '../../images/home1.png'
import { Stack } from "@mui/system";
import Footer from "./Footer";
function ResponsiveAppBar() {

    const logOut = ()=>{
      localStorage.removeItem("token");
      window.location.href = "/";
    }

    return (
        <div className="header"  >
        
        {/*---- Include the above in your HEAD tag --------*/}
        
        {/* Navigation */}
        <div className="fixed-top">
      
          <nav className="navbar navbar-expand-lg navbar-dark mx-background-top-linear w-100 p-2">
            <div className="container">
              <a className="navbar-brand" rel="nofollow" target="_blank" href="#" style={{textTransform: 'uppercase'}}>XPERTS
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive" >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active" style={{marginLeft:"750px"}}>
                    <a  className="nav-link" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a    className="nav-link" href="/signin">Signin</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">About Us</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">About Us</a>
                  </li>

                  <li className="nav-item">
                    <button type="submit" onClick={()=>logOut()}>Logout</button>
                  </li>

                </ul>
              </div>
            </div>
          </nav>
         
    
       
 

      
      
    
       </div>
       <Stack>
        <img src={HomeImage1}    style={{marginLeft:'800',height:'800px'   }}  />
        <Footer/>
       
        </Stack>
       </div>
      
    );
}
export default ResponsiveAppBar; 
  

  
