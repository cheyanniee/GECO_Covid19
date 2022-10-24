import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Pricing = () => {
  return (
    <>
      <Header />
      {/* Start pricing */}
      <div className="container-lg py-5">
        <div className="col-md-12 m-auto text-center py-5">
          <h1 className="pricing-header h2 semi-bold-600">Pricing</h1>
          <p className="pricing-footer">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            facilisis.
          </p>
        </div>
        <div className="row px-lg-3">
          <div className="col-md-4 pb-5 pt-sm-0 mt-5 px-xl-3">
            <div className="pricing-table card h-100 shadow-sm border-0 py-5">
              <div className="pricing-table-body card-body rounded-pill text-center align-self-center p-md-0">
                <i className="pricing-table-icon display-3 bx bx-package text-secondary" />
                <h2 className="pricing-table-heading h5 semi-bold-600">
                  Free Plan
                </h2>
                <p>$0</p>
                <ul className="pricing-table-body text-start text-dark px-4 list-unstyled light-300">
                  <li>
                    <i className="bx bxs-circle me-2" />5 Users
                  </li>
                  <li>
                    <i className="bx bxs-circle me-2" />2 TB space
                  </li>
                  <li>
                    <i className="bx bxs-circle me-2" />
                    Community Forums
                  </li>
                  <li>
                    <i className="bx bxs-circle me-2" />
                    Email Support
                  </li>
                </ul>
                <div className="pricing-table-footer pt-5">
                  <Link
                    to="#"
                    className="btn rounded-pill px-4 btn-outline-primary light-300"
                  >
                    Get Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 pt-sm-0 pt-3 px-xl-3">
            <div className="pricing-table card bg-secondary h-100 card-rounded shadow-sm border-0 py-5">
              <div className="pricing-table-body card-body text-center text-white align-self-center p-md-0">
                <i className="pricing-table-icon display-3 bx bx-package text-white py-3" />
                <h2 className="pricing-table-heading h5 semi-bold-600">
                  Standard Plan
                </h2>
                <p>$120/Year</p>
                <ul className="pricing-table-list text-start text-dark px-4 list-unstyled light-300">
                  <li className="text-white">
                    <i className="bx bxs-circle me-2" />
                    25 to 99 Users
                  </li>
                  <li className="text-white">
                    <i className="bx bxs-circle me-2" />
                    10 TB space
                  </li>
                  <li className="text-white">
                    <i className="bx bxs-circle me-2" />
                    Source Files
                  </li>
                  <li className="text-white">
                    <i className="bx bxs-circle me-2" />
                    Live Chat
                  </li>
                </ul>
                <div className="pricing-table-footer pt-5 pb-2">
                  <Link
                    to="#"
                    className="btn rounded-pill px-4 btn-outline-light light-300"
                  >
                    Get Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 pb-5 pt-sm-0 mt-5 px-xl-3">
            <div className="pricing-table card h-100 shadow-sm border-0 py-5">
              <div className="pricing-table-body card-body text-center align-self-center p-md-0">
                <i className="pricing-table-icon display-3 bx bx-package text-secondary" />
                <h2 className="pricing-table-heading h5 semi-bold-600">
                  Enterprise
                </h2>
                <p>$840/Year</p>
                <ul className="pricing-table-list text-start text-dark px-4 list-unstyled light-300">
                  <li>
                    <i className="bx bxs-circle me-2" />
                    100 users or more
                  </li>
                  <li>
                    <i className="bx bxs-circle me-2" />
                    80 TB space
                  </li>
                  <li>
                    <i className="bx bxs-circle me-2" />
                    Full Access Sources
                  </li>
                  <li>
                    <i className="bx bxs-circle me-2" />
                    Live Chat
                  </li>
                  <li>
                    <i className="bx bxs-circle me-2" />
                    Customizations
                  </li>
                </ul>
                <div className="pricing-table-footer pt-1">
                  <Link
                    to="#"
                    className="btn rounded-pill px-4 btn-outline-primary light-300"
                  >
                    Get Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Content */}
      {/* Start Pricing Horizontal Section */}
      <section className="bg-light pt-sm-0 py-5">
        <div className="container py-5">
          <h1 className="h2 semi-bold-600 text-center mt-2">Our Pricing</h1>
          <p className="text-center pb-5 light-300">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            facilisis.
          </p>
          {/* Start Pricing Horizontal */}
          <div className="pricing-horizontal row col-10 m-auto d-flex shadow-sm rounded overflow-hidden bg-white">
            <div className="pricing-horizontal-icon col-md-3 text-center bg-secondary text-light py-4">
              <i className="display-1 bx bx-package pt-4" />
              <h5 className="h5 semi-bold-600 pb-4 light-300">Free</h5>
            </div>
            <div className="pricing-horizontal-body offset-lg-1 col-md-5 col-lg-4 d-flex align-items-center pl-5 pt-lg-0 pt-4">
              <ul className="text-left px-4 list-unstyled mb-0 light-300">
                <li>
                  <i className="bx bxs-circle me-2" />5 Users
                </li>
                <li>
                  <i className="bx bxs-circle me-2" />2 TB space
                </li>
                <li>
                  <i className="bx bxs-circle me-2" />
                  Community Forums
                </li>
              </ul>
            </div>
            <div className="pricing-horizontal-tag col-md-4 text-center pt-3 d-flex align-items-center">
              <div className="w-100 light-300">
                <p>$0</p>
                <Link
                  to="#"
                  className="btn rounded-pill px-4 btn-outline-primary mb-3"
                >
                  Get Now
                </Link>
              </div>
            </div>
          </div>
          {/* End Pricing Horizontal */}
          {/* Start Pricing Horizontal */}
          <div className="pricing-horizontal row col-10 m-auto d-flex shadow-sm rounded overflow-hidden my-5 bg-white">
            <div className="pricing-horizontal-icon col-md-3 text-center bg-secondary text-light py-4">
              <i className="display-1 bx bx-package pt-4" />
              <h5 className="h5 semi-bold-600 pb-4 light-300">Standard</h5>
            </div>
            <div className="pricing-horizontal-body offset-lg-1 col-md-5 col-lg-4 d-flex align-items-center pl-5 pt-lg-0 pt-4">
              <ul className="text-left px-4 list-unstyled mb-0 light-300">
                <li>
                  <i className="bx bxs-circle me-2" />
                  25 to 99 Users
                </li>
                <li>
                  <i className="bx bxs-circle me-2" />
                  10 TB space
                </li>
                <li>
                  <i className="bx bxs-circle me-2" />
                  Live Chat
                </li>
              </ul>
            </div>
            <div className="pricing-horizontal-tag col-md-4 text-center pt-3 d-flex align-items-center">
              <div className="w-100 light-300">
                <p>$120/Year</p>
                <Link
                  to="#"
                  className="btn rounded-pill px-4 btn-outline-primary mb-3"
                >
                  Get Now
                </Link>
              </div>
            </div>
          </div>
          {/* End Pricing Horizontal */}
          {/* Start Pricing Horizontal */}
          <div className="pricing-horizontal row col-10 m-auto d-flex shadow-sm rounded overflow-hidden bg-white">
            <div className="pricing-horizontal-icon col-md-3 text-center bg-secondary text-light py-4">
              <i className="display-1 bx bx-package pt-4" />
              <h5 className="h5 semi-bold-600 pb-4 light-300">Enterprise</h5>
            </div>
            <div className="pricing-horizontal-body offset-lg-1 col-md-5 col-lg-4 d-flex align-items-center pl-5 pt-lg-0 pt-4">
              <ul className="text-left px-4 list-unstyled mb-0 light-300">
                <li>
                  <i className="bx bxs-circle me-2" />
                  100 users or more
                </li>
                <li>
                  <i className="bx bxs-circle me-2" />
                  80 TB space
                </li>
                <li>
                  <i className="bx bxs-circle me-2" />
                  Full Access
                </li>
                <li>
                  <i className="bx bxs-circle me-2" />
                  Customizations
                </li>
              </ul>
            </div>
            <div className="pricing-horizontal-tag col-md-4 text-center pt-3 d-flex align-items-center">
              <div className="w-100 light-300">
                <p>$840/Year</p>
                <Link
                  to="#"
                  className="btn rounded-pill px-4 btn-outline-primary mb-3"
                >
                  Get Now
                </Link>
              </div>
            </div>
          </div>
          {/* End Pricing Horizontal */}
        </div>
      </section>
      {/*End Pricing Horizontal Section*/}
      <section className="container py-5">
        <h1 className="h2 semi-bold-600 text-center pt-5">Pricing</h1>
        <p className="text-center pb-5 light-300">
          Vector illustration from{" "}
          <Link to="https://storyset.com/" target="_blank">
            StorySet
          </Link>
          . Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          facilisis.
        </p>
        <div className="row d-flex align-items-center pb-5">
          <div className="col-lg-6 offset-lg-0 col-md-8 offset-md-2">
            <img
              className="rounded float-right"
              src="./assets/img/pricing.svg"
              alt=""
            />
          </div>
          <div className="col-lg-6">
            {/* Start Pricing List */}
            <div className="pricing-list shadow-sm rounded-top rounded-3 py-sm-0 py-5">
              <div className="row p-2">
                <div className="pricing-list-icon col-3 text-center m-auto text-secondary ml-5 py-2">
                  <i className="display-3 bx bx-package" />
                </div>
                <div className="pricing-list-body col-md-5 align-items-center pl-3 pt-2">
                  <ul className="list-unstyled text-center light-300">
                    <li className="h5 semi-bold-600 mb-0 mt-3">Free</li>
                    <li>Deserunt mollit laborum.</li>
                  </ul>
                </div>
                <div className="pricing-list-footer col-4 text-center m-auto align-items-center">
                  <Link
                    to="#"
                    className="btn rounded-pill px-4 btn-primary light-300"
                  >
                    $0
                  </Link>
                </div>
              </div>
            </div>
            {/* End Pricing List */}
            {/* Start Pricing List */}
            <div className="pricing-list shadow-sm py-sm-0 py-5">
              <div className="row p-2">
                <div className="pricing-list-icon col-3 text-center m-auto text-secondary ml-5 py-2">
                  <i className="display-3 bx bx-package" />
                </div>
                <div className="pricing-list-body col-md-5 align-items-center pl-3 pt-2">
                  <ul className="list-unstyled text-center light-300">
                    <li className="h5 semi-bold-600 mb-0 mt-3">Standard</li>
                    <li>Adipiscing elit, sed do</li>
                  </ul>
                </div>
                <div className="pricing-list-footer col-sm-4 col-5 text-center m-auto align-items-center">
                  <Link
                    to="#"
                    className="btn rounded-pill px-4 btn-primary light-300"
                  >
                    $120/Year
                  </Link>
                </div>
              </div>
            </div>
            {/* End Pricing List */}
            {/* Start Pricing List */}
            <div className="pricing-list shadow-sm rounded-botton rounded-3 py-sm-0 py-5">
              <div className="row p-2">
                <div className="pricing-list-icon col-sm-3 text-center m-auto text-secondary ml-5 py-2">
                  <i className="display-3 bx bx-package" />
                </div>
                <div className="pricing-list-body col-md-5 align-items-center pl-3 pt-2">
                  <ul className="list-unstyled text-center light-300">
                    <li className="h5 semi-bold-600 mb-0 mt-3">Enterprise</li>
                    <li>Sed do eiusmod tempor</li>
                  </ul>
                </div>
                <div className="pricing-list-footer col-sm-4 col-5 text-center m-auto align-items-center">
                  <Link
                    to="#"
                    className="btn rounded-pill px-4 btn-primary light-300"
                  >
                    $840/Year
                  </Link>
                </div>
              </div>
            </div>
            {/* End Pricing List */}
            <p className="text-center">
              <Link
                className="btn px-4 mt-4 mx-auto btn-outline-primary"
                to="#"
              >
                Get Now
              </Link>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Pricing;
