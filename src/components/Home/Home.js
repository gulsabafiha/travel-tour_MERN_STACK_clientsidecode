import React from "react";
import Customer from "../Customer/Customer";
import Services from "../Services/Services";
import Slide from "../Slide/Slide";
import "./Home.css";

const Home = () => {
  return (
    <div>
      {/* Banner part */}
      <div className="banner-bg">
        <h1>Travel & Tours</h1>
        <h3>Make your dream come true with us.</h3>
        <button>Explore us</button>
      </div>
      <Services></Services>
      <Slide></Slide>
      <Customer></Customer>
    </div>
  );
};

export default Home;
