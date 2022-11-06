import React, { useState } from 'react';
import '../../styles/Admin.css';
import admin from  '../../images/admin.jpg'
import AdminHeader from './AdminHeader';
import ViewInventry from '../inventry_mgmt/ViewInventry';


export default function Admin() {
    return (
        
        <div className='mt-5'>
            
            
            
            <center><img src={admin} width="950px" height='500px' marginTop='200'/></center>
            <div style={{marginTop:-540}}></div>
            <div className=" display-table  mt-5">
                <div className="row display-table-row ">
                    <div className="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box " id="navigation"  >
                       
                      
                        <div  className="navi" >
                            <ul >
                                <li ><a href="/"><className style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Staff Management</span></a></li>
                                <li><a href="/"><className style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Order Management</span></a></li>
                                <li><a href="/warehouse"><className style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;WareHouse Management</span></a></li>
                                <li><a href="/"><className style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Item Management</span></a></li>
                                <li><a href="/inventry"><className style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Inventry Management</span></a></li>
                                <li><a href="/"><className style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Invoice Management</span></a></li>
                                <li><a href="/"><className style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Payment Management</span></a></li>
                               
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-10 col-sm-9 display-table-cell v-align">
                        <AdminHeader/>
                     

                        <div className="row mb-4">
                           



                    </div>
                </div>

            </div>




        </div>
        </div>

    )
}