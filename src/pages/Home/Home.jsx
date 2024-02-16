import React from "react";
import { Page } from "./style";
import "./style.js";
import Header from "../../components/Header/Header.jsx";
import Banner from "../../components/Banner/Banner.jsx";
import About from "../../components/About/About.jsx";
const Home = () => {
  return (
    <Page>
      <Header />
      <Banner />
      <About />
    </Page>
  );
};

export default Home;
