import React from 'react'
import './App.css';
import Homepage from './pages/Homepage/Homepage.component';
import {Route , Switch} from 'react-router-dom'
import ShopPage from './pages/Shop/shop.component';
import Header from './component/header/header.component';
import SignInAndSignUpPage from './pages/Sign-In-Sign-Up/Sign-In-Sign-Up.component';
import { auth, createUserProfilDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();

    this.state ={
      currentUser : null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if(userAuth){
      const userRef = await createUserProfilDocument(userAuth);
      userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser : {
              id : snapShot.id,
              ...snapShot.data()
            }
            
          })
         
      })
    }else{
        this.setState({currentUser : userAuth});
      }
      
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
        <Route exact path="/" component={Homepage}></Route>
        <Route exact path="/shop" component={ShopPage}></Route>
        <Route exact path="/signin" component={SignInAndSignUpPage}></Route>
        </Switch>
        
      </div>
    );
  }
 
  
  
}

export default App;
