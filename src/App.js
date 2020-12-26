import './App.css';
import Homepage from './pages/Homepage/Homepage.component';
import {Route , Switch} from 'react-router-dom'
import ShopPage from './pages/Shop/shop.component';

function App() {
  return (
    <div>
      <Switch>
      <Route exact path="/" component={Homepage}></Route>
      <Route exact path="/shop" component={ShopPage}></Route>
      </Switch>
      
    </div>
  );
}

export default App;
