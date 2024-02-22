import React from "react";
import { Page } from "./style";
import "./style.js";
import Header from "../../components/Header/Header.jsx";
import Banner from "../../components/Banner/Banner.jsx";
import About from "../../components/About/About.jsx";
import Reviews from "../../components/Reviews/Reviews.jsx";

const Home = () => {
  return (
    <Page>
      <Header />
      <Banner />
      <About />
      <Reviews />
    </Page>
  );
};

export default Home;
