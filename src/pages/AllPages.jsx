import Home from "./Home";
import Product from "./Product";
import Register from "./Register";
import Cart from "./Cart";
import Login from "./Login";
import ProductList from "./ProductList";

import React from "react";

const AllPages = () => {
  return (
    <div>
      <Home />
      <Product />
      <Cart />
      <ProductList />
      <Login />
      <Register />
    </div>
  );
};

export default AllPages;
