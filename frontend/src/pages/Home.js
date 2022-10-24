import React from "react";
import BannerHero from "../components/BannerHero";
import Clinics from "../components/Clinics";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <BannerHero />
      <Clinics />
      <Footer />
    </>
  );
};

export default Home;
