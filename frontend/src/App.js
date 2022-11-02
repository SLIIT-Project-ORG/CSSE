import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inventry from './components/inventry_mgmt/Inventry';
import UpdateInventry from './components/inventry_mgmt/UpdateInventry';
import Item from './components/inventry_mgmt/Item';
import UpdateItem from './components/inventry_mgmt/UpdateItem';
import Order from './components/order_mgmt/Order';
import UpdateOrder from './components/order_mgmt/UpdateOrder';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/inventry' element={<Inventry />}></Route>
          <Route path='/updateinventry' element={<UpdateInventry />}></Route>
          <Route path='/item' element={<Item />}></Route>
          <Route path='/updateitem' element={<UpdateItem />}></Route>
          <Route path='/order' element={<Order />}></Route>
          <Route path='/updateorder' element={<UpdateOrder />}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
