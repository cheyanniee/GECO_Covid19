import React from "react";
import BannerHero from "../components/BannerHero";
import Footer from "../components/Footer";
import Header from "../components/Header";
import RecentWork from "../components/RecentWork";
import Service from "../components/Service";
import ViewWork from "../components/ViewWork";

const Home = () => {
  return (
    <>
      <Header />
      <BannerHero />
      <Service />
      <ViewWork />
      <RecentWork />
      <Footer />
    </>
  );
};

export default Home;
