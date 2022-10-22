import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Clinics = () => {
  useEffect(() => {
    const getClinicsFromDB = () => {};
    getClinicsFromDB();
  }, []);

  return (
    <>
      <section className="service-wrapper py-3">
        <div className="container-fluid pb-3">
          <div className="row">
            <h2 className="h2 text-center col-12 py-5 semi-bold-600">
              Clinics
            </h2>
            <div className="service-header col-2 col-lg-3 text-end light-300">
              <i className="bx bx-gift h3 mt-1" />
            </div>
            <div className="service-heading col-10 col-lg-9 text-start float-end light-300">
              <h2 className="h3 pb-4 typo-space-line">
                Vacinations or COVID-19 Test
              </h2>
            </div>
          </div>
          <p className="service-footer col-10 offset-2 col-lg-9 offset-lg-3 text-start pb-3 text-muted px-2">
            All clinics available around the island for booking Vacinations or
            COVID-19 Test
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
                  North
                </Link>
              </li>
              <li className="filter-btn nav-item mx-lg-4">
                <Link
                  className="filter-btn nav-link btn-outline-primary rounded-pill text-light px-4 light-300"
                  href="#"
                  data-filter=".ui"
                >
                  South
                </Link>
              </li>
              <li className="nav-item mx-lg-4">
                <Link
                  className="filter-btn nav-link btn-outline-primary rounded-pill text-light px-4 light-300"
                  href="#"
                  data-filter=".branding"
                >
                  East
                </Link>
              </li>
              <li className="nav-item mx-lg-4">
                <Link
                  className="filter-btn nav-link btn-outline-primary rounded-pill text-light px-4 light-300"
                  href="#"
                  data-filter=".branding"
                >
                  West
                </Link>
              </li>
              <li className="nav-item mx-lg-4">
                <Link
                  className="filter-btn nav-link btn-outline-primary rounded-pill text-light px-4 light-300"
                  href="#"
                  data-filter=".branding"
                >
                  Central
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
                    Lim's and Partners Toa Payoh Clinic
                  </span>
                  <p className="card-text">
                    190 Toa Payoh Lorong 2 #01-1190 Singapore 310190
                  </p>
                  <p className="card-text">Contact: 67778890</p>
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
        {/* Start of Pagination */}
        <div className="row">
          <div
            className="btn-toolbar justify-content-center pb-4"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <div
              className="btn-group me-2"
              role="group"
              aria-label="First group"
            >
              <button type="button" className="btn btn-secondary text-white">
                Previous
              </button>
            </div>
            <div
              className="btn-group me-2"
              role="group"
              aria-label="Second group"
            >
              <button type="button" className="btn btn-light">
                1
              </button>
            </div>
            <div
              className="btn-group me-2"
              role="group"
              aria-label="Second group"
            >
              <button type="button" className="btn btn-secondary text-white">
                2
              </button>
            </div>
            <div className="btn-group" role="group" aria-label="Third group">
              <button type="button" className="btn btn-secondary text-white">
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Clinics;
