import React from "react";
import '../../styles/Header.css'

function AdminHeader() {

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
                    <a  style={{color:'black'}} className="nav-link" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a  style={{color:'black'}}  className="nav-link" href="/signin">Signin</a>
                  </li>
                  <li className="nav-item">
                    <a  style={{color:'black'}}  className="nav-link" href="/">About Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
}
export default AdminHeader; 