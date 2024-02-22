import React from "react";
import { Page } from "./style";
import "./style.js";
import Header from "../../components/Header/Header.jsx";
import Banner from "../../components/Banner/Banner.jsx";
import About from "../../components/About/About.jsx";
import Reviews from "../../components/Reviews/Reviews.jsx";
import Routes from "../../components/Routes/Routes.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Gallery from "../../components/Gallery/Gallery.jsx";

const Home = () => {
  return (
    <Page>
      <Header />
      <Banner />
      <About />
      <Gallery />
      <Reviews />
      <Routes />
      <Footer />
    </Page>
  );
};

export default Home;
