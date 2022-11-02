import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inventry from './components/inventry_mgmt/Inventry';
import UpdateInventry from './components/inventry_mgmt/UpdateInventry';
import Item from './components/inventry_mgmt/Item';
import UpdateItem from './components/inventry_mgmt/UpdateItem';
import Order from './components/order_mgmt/Order';
import UpdateOrder from './components/order_mgmt/UpdateOrder';
import OrderView from './components/order_mgmt/OrderView';
import ViewInventry from './components/inventry_mgmt/ViewInventry';
import SignIn from './components/user_mgmt/Login';
import SignUp from './components/user_mgmt/Register';
import ResponsiveAppBar from './components/user_mgmt/header';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path='/signin' element={<SignIn />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/inventry' element={<Inventry />}></Route>
          <Route path='/updateinventry' element={<UpdateInventry />}></Route>
          <Route path='/item' element={<Item />}></Route>
          <Route path='/updateitem' element={<UpdateItem />}></Route>
          <Route path='/order' element={<Order />}></Route>
          <Route path='/updateorder' element={<UpdateOrder />}></Route>
          <Route path='/orderview' element={<OrderView />}></Route>
          <Route path='/viewinventry' element={<ViewInventry />}></Route>
          <Route path='/' element={<ResponsiveAppBar />}></Route>

        </Routes>
      </Router>

    </div>
  );
}

export default App;
