import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchUsers from "../components/SearchUsers";

const DoctorSearch = () => {
  return (
    <>
      <Header />
      <section className="">DOCTOR Page</section>
      <SearchUsers />
      <Footer />
    </>
  );
};

export default DoctorSearch;
