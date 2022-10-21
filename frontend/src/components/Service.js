import React from "react";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <>
      <section className="service-wrapper py-3">
        <div className="container-fluid pb-3">
          <div className="row">
            <h2 className="h2 text-center col-12 py-5 semi-bold-600">
              Services
            </h2>
            <div className="service-header col-2 col-lg-3 text-end light-300">
              <i className="bx bx-gift h3 mt-1" />
            </div>
            <div className="service-heading col-10 col-lg-9 text-start float-end light-300">
              <h2 className="h3 pb-4 typo-space-line">
                Make Success for future
              </h2>
            </div>
          </div>
          <p className="service-footer col-10 offset-2 col-lg-9 offset-lg-3 text-start pb-3 text-muted px-2">
            You are free to use this template for your commercial or business
            websites. You are not allowed to re-distribute this template ZIP
            file on any template collection websites. It is too easy to
            illegally copy and repost this template.
          </p>
        </div>
        <div className="service-tag py-5 bg-secondary">
          <div className="col-md-12">
            <ul className="nav d-flex justify-content-center">
              <li className="nav-item mx-lg-4">
                <Link
                  className="filter-btn nav-link btn-outline-primary active shadow rounded-pill text-light px-4 light-300"
                  href="#"
                  data-filter=".project"
                >
                  All
                </Link>
              </li>
              <li className="nav-item mx-lg-4">
                <Link
                  className="filter-btn nav-link btn-outline-primary rounded-pill text-light px-4 light-300"
                  href="#"
                  data-filter=".graphic"
                >
                  Graphics
                </Link>
              </li>
              <li className="filter-btn nav-item mx-lg-4">
                <Link
                  className="filter-btn nav-link btn-outline-primary rounded-pill text-light px-4 light-300"
                  href="#"
                  data-filter=".ui"
                >
                  UI/UX
                </Link>
              </li>
              <li className="nav-item mx-lg-4">
                <Link
                  className="filter-btn nav-link btn-outline-primary rounded-pill text-light px-4 light-300"
                  href="#"
                  data-filter=".branding"
                >
                  Branding
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="container overflow-hidden py-5">
        <div className="row gx-5 gx-sm-3 gx-lg-5 gy-lg-5 gy-3 pb-3 projects">
          {/* Start Recent Work */}
          <div className="col-xl-3 col-md-4 col-sm-6 project ui branding">
            <Link
              to="#"
              className="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0"
            >
              <img
                className="service card-img"
                src="./assets/img/services-01.jpg"
                alt=""
              />
              <div className="service-work-vertical card-img-overlay d-flex align-items-end">
                <div className="service-work-content text-left text-light">
                  <span className="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">
                    UI/UX design
                  </span>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                  </p>
                </div>
              </div>
            </Link>
          </div>
          {/* End Recent Work */}
          {/* Start Recent Work */}
          <div className="col-xl-3 col-md-4 col-sm-6 project ui graphic">
            <Link
              to="#"
              className="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0"
            >
              <img
                className="card-img"
                src="./assets/img/services-02.jpg"
                alt=""
              />
              <div className="service-work-vertical card-img-overlay d-flex align-items-end">
                <div className="service-work-content text-left text-light">
                  <span className="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">
                    Social Media
                  </span>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                  </p>
                </div>
              </div>
            </Link>
          </div>
          {/* End Recent Work */}
          {/* Start Recent Work */}
          <div className="col-xl-3 col-md-4 col-sm-6 project branding">
            <Link
              to="#"
              className="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0"
            >
              <img
                className="card-img"
                src="./assets/img/services-03.jpg"
                alt=""
              />
              <div className="service-work-vertical card-img-overlay d-flex align-items-end">
                <div className="service-work-content text-left text-light">
                  <span className="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">
                    Marketing
                  </span>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                  </p>
                </div>
              </div>
            </Link>
          </div>
          {/* End Recent Work */}
          {/* Start Recent Work */}
          <div className="col-xl-3 col-md-4 col-sm-6 project ui graphic">
            <Link
              to="#"
              className="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0"
            >
              <img
                className="card-img"
                src="./assets/img/services-04.jpg"
                alt=""
              />
              <div className="service-work-vertical card-img-overlay d-flex align-items-end">
                <div className="service-work-content text-left text-light">
                  <span className="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">
                    Graphic
                  </span>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                  </p>
                </div>
              </div>
            </Link>
          </div>
          {/* End Recent Work */}
          {/* Start Recent Work */}
          <div className="col-xl-3 col-md-4 col-sm-6 project ui graphic">
            <Link
              to="#"
              className="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0"
            >
              <img
                className="card-img"
                src="./assets/img/services-05.jpg"
                alt=""
              />
              <div className="service-work-vertical card-img-overlay d-flex align-items-end">
                <div className="service-work-content text-left text-light">
                  <span className="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">
                    Digtal Marketing
                  </span>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                  </p>
                </div>
              </div>
            </Link>
          </div>
          {/* End Recent Work */}
          {/* Start Recent Work */}
          <div className="col-xl-3 col-md-4 col-sm-6 project branding">
            <Link
              to="#"
              className="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0"
            >
              <img
                className="card-img"
                src="./assets/img/services-06.jpg"
                alt=""
              />
              <div className="service-work-vertical card-img-overlay d-flex align-items-end">
                <div className="service-work-content text-left text-light">
                  <span className="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">
                    Market Research
                  </span>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                  </p>
                </div>
              </div>
            </Link>
          </div>
          {/* End Recent Work */}
          {/* Start Recent Work */}
          <div className="col-xl-3 col-md-4 col-sm-6 project branding">
            <Link
              to="#"
              className="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0"
            >
              <img
                className="card-img"
                src="./assets/img/services-07.jpg"
                alt=""
              />
              <div className="service-work-vertical card-img-overlay d-flex align-items-end">
                <div className="service-work-content text-left text-light">
                  <span className="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">
                    Business
                  </span>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                  </p>
                </div>
              </div>
            </Link>
          </div>
          {/* End Recent Work */}
          {/* Start Recent Work */}
          <div className="col-xl-3 col-md-4 col-sm-6 project ui graphic branding">
            <Link
              to="#"
              className="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0"
            >
              <img
                className="card-img"
                src="./assets/img/services-08.jpg"
                alt=""
              />
              <div className="service-work-vertical card-img-overlay d-flex align-items-end">
                <div className="service-work-content text-left text-light">
                  <span className="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">
                    Branding
                  </span>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                  </p>
                </div>
              </div>
            </Link>
          </div>
          {/* End Recent Work */}
        </div>
      </section>
    </>
  );
};

export default Service;
