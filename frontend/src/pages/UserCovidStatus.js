import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const UserCovidStatus = () => {
  return (
    <>
      <Header />
      <section className="container-lg py-5">
        <div className="row pt-5">
          <div className="worksingle-content col-lg-8 m-auto text-left justify-content-center">
            <h2 className="worksingle-heading h3 pb-3 light-300 typo-space-line">
              Your COVID status
            </h2>
            <p className="worksingle-footer py-3 text-muted light-300">
              Here you can find your COVID status
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default UserCovidStatus;
