import { Switch, Route } from 'react-router-dom';
import { Homepage } from './pages/homepage/homepage.component.js';
import ShopPage from './pages/shop/shop.component.js';
import Header from './components/header/header.component.js';
import './App.css';

import React from 'react'

function App() {
  return (
    <div>
    <Header/>
      <Switch>
     <Route exact path='/' component={Homepage}/>
     <Route path='/shop' component={ShopPage}/>
     </Switch>
    </div>
  );
}

export default App;
