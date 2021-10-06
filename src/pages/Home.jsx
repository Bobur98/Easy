import React from "react";
import Announcement from "../components/announcement";
import Slider from "../components/slider";

import Navbar from "../components/navbar";
import Categories from "../components/categories";
import Products from "../components/products";
import Newsletter from "../components/newsletter";
import Footer from "../components/footer";
import Register from "./Register";
import Login from "./Login";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Register />
      <Login />
      <Footer />
    </div>
  );
};

export default Home;
