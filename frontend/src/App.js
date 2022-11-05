import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inventry from './components/inventry_mgmt/Inventry';
import UpdateInventry from './components/inventry_mgmt/UpdateInventry';
import Item from './components/inventry_mgmt/Item';
import UpdateItem from './components/inventry_mgmt/UpdateItem';
import PurchaseOrder from './components/order_mgmt/PurchaseOrder';
import UpdateOrder from './components/order_mgmt/UpdateOrder';
import SiteManagerOrderView from './components/order_mgmt/SiteManagerOrderView';
import ViewInventry from './components/inventry_mgmt/ViewInventry';
import SignIn from './components/user_mgmt/Login';
import SignUp from './components/user_mgmt/Register';
import ResponsiveAppBar from './components/user_mgmt/header';
import StaffOrderView from './components/order_mgmt/StaffOrderView';
import Dashboard from './components/user_mgmt/Dashboard';


function App() {
  return (
    <div className="App">
      {
          localStorage.token ? <Dashboard/>:<SignIn/>
            
        }
      <Router>
        <Routes>

          <Route path='/signin' element={<SignIn />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/inventry' element={<Inventry />}></Route>
          <Route path='/updateinventry' element={<UpdateInventry />}></Route>
          <Route path='/item' element={<Item />}></Route>
          <Route path='/updateitem' element={<UpdateItem />}></Route>
          <Route path='/purchaseOrder' element={<PurchaseOrder />}></Route>
          <Route path='/updateorder' element={<UpdateOrder />}></Route>
          <Route path='/siteManagerOrderView' element={<SiteManagerOrderView/>}></Route>
          <Route path='/viewinventry' element={<ViewInventry />}></Route>
          <Route path='/' element={<ResponsiveAppBar />}></Route>
          <Route path='/staffOrderView' element={<StaffOrderView/>}></Route>

        </Routes>
      </Router>

    </div>
  );
}

export default App;
