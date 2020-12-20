import './App.css';
import Homepage from './pages/Homepage/Homepage.component';
import {Route , Switch} from 'react-router-dom'
const Hats = () => (
  <div>
    <h1>HAts</h1>
  </div>
);
function App() {
  return (
    <div>
      <Switch>
      <Route exact path="/" component={Homepage}></Route>
      <Route exact path="/shop/hats" component={Hats}></Route>
      </Switch>
      
    </div>
  );
}

export default App;
