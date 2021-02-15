import React from "react";
import ProductPage from "./pages/product/ProductPage";
import Cart from "./pages/cart/Cart";
import { Switch, Route } from "react-router-dom";
import { ContainerCustom } from "components";

function App() {
  return (
    <ContainerCustom padding="0 0 20px 0" bg="#E5E5E5" width="360px" margin="0 auto">
      <Switch>
        <Route path="/" exact component={Cart} />
        <Route path="/product/:id/" exact render={() => <ProductPage />} />
      </Switch>
    </ContainerCustom>
  );
}

export default App;
