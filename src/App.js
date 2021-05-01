import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Products from './Components/Products/Products';
import AddProduct from './Components/AddProduct/AddProduct';
import Menu from './Components/Menu/Menu';
import Login from './Components/LogIn/Login';
import { createContext, useState } from 'react';
import Checkout from './Components/Checkout/Checkout';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Order from './Components/Order/Order';
import Manage from './Components/Manage/Manage';


export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <userContext.Provider value = {[loggedInUser,setLoggedInUser]}>
        <Router>
        <Menu></Menu>
        <Switch>
          <PrivateRoute path="/admin">
            <Manage></Manage>
          </PrivateRoute>
          <Route path="/addProduct">
            <AddProduct></AddProduct>
          </Route>
          <Route path="/manage">
            <Manage></Manage>
          </Route>
          <PrivateRoute path="/checkout">
            <Checkout></Checkout>
          </PrivateRoute>
          <PrivateRoute path="/order">
            <Order></Order>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/product/:productid">
            <Checkout></Checkout>
          </PrivateRoute>
          <Route path="/">
            <Products></Products>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
