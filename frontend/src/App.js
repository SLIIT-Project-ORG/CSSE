import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inventry from './components/inventry_mgmt/Inventry';
import UpdateOrder from './components/order_mgmt/UpdateOrder';
import SiteManagerOrderView from './components/order_mgmt/SiteManagerOrderView';
import ViewInventry from './components/inventry_mgmt/ViewInventry';
import SignIn from './components/user_mgmt/Login';
import SignUp from './components/user_mgmt/Register';
import ResponsiveAppBar from './components/user_mgmt/header';

import SitedetailsManagement from './components/site_mgmt/ManageSites';
import AddSiteDetails from './components/site_mgmt/AddSite';
import UpdateSiteDetails from './components/site_mgmt/UpdateSiteDetails';

import InvoiceManagement from './components/Invoice_mgmt/ManageInvoice';
import Dashboard from './components/user_mgmt/Dashboard';
import StaffOrderView from './components/order_mgmt/StaffOrderView';
import Order from './components/order_mgmt/PurchaseOrder';
import Admin from './components/user_mgmt/Admin';

import { OrderDashboard } from './components/order_mgmt/OrderDashboard';
import WManagement from './components/inventry_mgmt/WareHouseManagement';
import UpdateWManagement from './components/inventry_mgmt/UpdateWarehouse';
import WareHouse from './components/inventry_mgmt/Warehouse';


function App() {
  return (
    <div className="App">
        {/* {
          localStorage.token ? <Dashboard/>:<SignIn/>    
        } */}
      <Router>
        {/* {
          localStorage.token ? <Dashboard /> : <SignIn />
        } */}
        <Routes>

          <Route path='/' element={<ResponsiveAppBar />}></Route>
          <Route path='/signin' element={<SignIn />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/inventry' element={<Inventry />}></Route>
          {/* <Route path='/warehouse' element={<WareHouse />}></Route> */}
          <Route path='/viewinventry' element={<ViewInventry />}></Route>
          {/* <Route path='/wmanagement' element={<WManagement />}></Route> */}
          {/* <Route path='/updatewmanagement/:id' element={<UpdateWManagement />}></Route> */}
       
        <Route path='/' element={<ResponsiveAppBar />}></Route> 
        <Route path='/signin' element={<SignIn />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/inventry' element={<Inventry />}></Route>
        <Route path='/inventry' element={<ViewInventry />}></Route>
        <Route path='/warehouse' element={<WareHouse />}></Route>
      
        {/* <Route path='/' element={<ResponsiveAppBar />}></Route> */}
        {/* <Route path='/warehouse' element={<WareHouse />}></Route> */}

        <Route path='/viewinventry' element={<ViewInventry />}></Route>
        <Route path='/WManagement' element={<WManagement />}></Route> 
        <Route path='/updatewmanagement/:id' element={<UpdateWManagement />}></Route>
        
          
           {/* <Route path='/order' element={<Order />}></Route>  */}

          <Route path='/updateorder' element={<UpdateOrder />}></Route> 
           {/* <Route path='/item' element={<Item />}></Route> 
          <Route path='/updateitem' element={<UpdateItem />}></Route> */}

          <Route path='/updateorder' element={<UpdateOrder />}></Route>

          {/* <Route path='/updateinventry' element={<UpdateInventry />}></Route> */}
          {/* <Route path='/item' element={<Item />}></Route> */}
          {/* <Route path='/updateitem' element={<UpdateItem />}></Route> */}
          <Route path='/order/staffOrderView' element={<StaffOrderView />}></Route>
          <Route path='/order/updateorder' element={<UpdateOrder />}></Route>

          <Route path='/staffOrderView' element={<StaffOrderView />}></Route>
          <Route path='/updateorder' element={<UpdateOrder />}></Route>
          <Route path='/siteManagerOrderView' element={<SiteManagerOrderView />}></Route>
          <Route path='/viewinventry' element={<ViewInventry />}></Route>
          <Route path='/order/purchaseOrder' element={<Order/>}></Route>
          <Route path="/order" element={<OrderDashboard/>}></Route>

          <Route path='/' element={<ResponsiveAppBar />}></Route>
          <Route path='/admindashboard' element={<Admin />}></Route>
        

                  

          <Route path='/addsite' element={<AddSiteDetails />}></Route>
          <Route path='/managesite' element={<SitedetailsManagement />}></Route>
          <Route path='/updatesitedetails/:id' element={<UpdateSiteDetails />}></Route>

          


        </Routes>
      </Router>

    </div>
  );
}


export default App;
