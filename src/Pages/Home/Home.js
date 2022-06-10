import React from "react";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import Menu from "../Shared/Menu/Menu";
import Banner from "./Banner/Banner";
import Breakfast from "./BreakFast/Breakfast";
import Dinner from "./Dinner/Dinner";
import Lunch from "./Lunch/Lunch";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Menu></Menu>
      <Breakfast></Breakfast>
      <Lunch></Lunch>
      <Dinner></Dinner>
    </div>
  );
};

export default Home;
