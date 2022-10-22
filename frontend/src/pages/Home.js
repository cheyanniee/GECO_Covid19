import React from "react";
import BannerHero from "../components/BannerHero";
import Clinics from "../components/Clinics";
import Footer from "../components/Footer";
import Header from "../components/Header";
import RecentWork from "../components/RecentWork";
import ViewWork from "../components/ViewWork";

const Home = () => {
  return (
    <>
      <Header />
      <BannerHero />
      <Clinics />
      <ViewWork />
      <RecentWork />
      <Footer />
    </>
  );
};

export default Home;
