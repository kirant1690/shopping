import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Homepage } from './pages/homepage/homepage.component.js';
import ShopPage from './pages/shop/shop.component.js';
import Header from './components/header/header.component.js';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.js';
import { auth } from './firebase/firebase.utils.js';
import './App.css';
class App extends React.Component{
  constructor(){
      super();

    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null 
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser:user});
      console.log(user);
    })
  }
  
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div>
      <Header currentUser={this.state.currentUser}/>
        <Switch>
       <Route exact path='/' component={Homepage}/>
       <Route path='/shop' component={ShopPage}/>
       <Route path='/signIn' component={SignInAndSignUp}/>
       </Switch>
      </div>
    );
  }
  }
  

export default App;
