import React from 'react'
import ProductPage from "./pages/product/ProductPage"
import Cart from "./pages/cart/Cart"
import {Switch, Route, withRouter, Redirect} from "react-router-dom";

function App() {
  return (
    <Switch>
    <Route path="/" exact component={Cart} />
    <Route path="/product/:id/" exact render={() => <ProductPage/>} />
  </Switch>
  );
}

export default App;
