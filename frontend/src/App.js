import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inventry from './components/inventry_mgmt/Inventry';


import Order from './components/order_mgmt/Order';
import UpdateOrder from './components/order_mgmt/UpdateOrder';


import SignIn from './components/user_mgmt/Login';
import SignUp from './components/user_mgmt/Register';

import ResponsiveAppBar from './components/user_mgmt/header';
import WareHouse from './components/inventry_mgmt/Warehouse';

import ViewInventry from './components/inventry_mgmt/ViewInventry';
import WManagement from './components/inventry_mgmt/WareHouseManagement';
import UpdateWManagement from './components/inventry_mgmt/UpdateWarehouse';





function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
       
        <Route path='/signin' element={<SignIn />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/inventry' element={<Inventry />}></Route>
        <Route path='/warehouse' element={<WareHouse />}></Route>
        <Route path='/viewinventry' element={<ViewInventry />}></Route>
        <Route path='/wmanagement' element={<WManagement />}></Route>
        <Route path='/updatewmanagement/:id' element={<UpdateWManagement />}></Route>
        
          
          <Route path='/order' element={<Order />}></Route>
          <Route path='/updateorder' element={<UpdateOrder />}></Route>
         
         
          <Route path='/' element={<ResponsiveAppBar />}></Route>
        

         
          
          

         
        </Routes>
      </Router>

    </div>
  );
}

export default App;
