import React from "react";
import { Link } from "react-router-dom";

const WorkCards = () => {
  return (
    <section className="container py-5">
      <div className="row justify-content-center my-5">
        <div className="filter-btns shadow-md rounded-pill text-center col-auto">
          <Link
            className="filter-btn btn rounded-pill btn-outline-primary border-0 m-md-2 px-md-4 active"
            data-filter=".project"
            to="#"
          >
            All
          </Link>
          <Link
            className="filter-btn btn rounded-pill btn-outline-primary border-0 m-md-2 px-md-4"
            data-filter=".business"
            to="#"
          >
            Business
          </Link>
          <Link
            className="filter-btn btn rounded-pill btn-outline-primary border-0 m-md-2 px-md-4"
            data-filter=".marketing"
            to="#"
          >
            Marketing
          </Link>
          <Link
            className="filter-btn btn rounded-pill btn-outline-primary border-0 m-md-2 px-md-4"
            data-filter=".social"
            to="#"
          >
            Social Media
          </Link>
          <Link
            className="filter-btn btn rounded-pill btn-outline-primary border-0 m-md-2 px-md-4"
            data-filter=".graphic"
            to="#"
          >
            Graphic
          </Link>
        </div>
      </div>
      <div className="row projects gx-lg-5">
        <Link
          to="/workSingle"
          className="col-sm-6 col-lg-4 text-decoration-none project marketing social business"
        >
          <div className="service-work overflow-hidden card mb-5 mx-5 m-sm-0">
            <img
              className="card-img-top"
              src="./assets/img/our-work-01.jpg"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title light-300 text-dark">
                Digital Marketing
              </h5>
              <p className="card-text light-300 text-dark">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolor.
              </p>
              <span className="text-decoration-none text-primary light-300">
                Read more <i className="bx bxs-hand-right ms-1" />
              </span>
            </div>
          </div>
        </Link>
        <Link
          to="/workSingle"
          className="col-sm-6 col-lg-4 text-decoration-none project graphic social"
        >
          <div className="service-work overflow-hidden card mx-5 mx-sm-0 mb-5">
            <img
              className="card-img-top"
              src="./assets/img/our-work-02.jpg"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title light-300 text-dark">
                Corporate Branding
              </h5>
              <p className="card-text light-300 text-dark">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <span className="text-decoration-none text-primary light-300">
                Read more <i className="bx bxs-hand-right ms-1" />
              </span>
            </div>
          </div>
        </Link>
        <Link
          to="/workSingle"
          className="col-sm-6 col-lg-4 text-decoration-none project marketing graphic business"
        >
          <div className="service-work overflow-hidden card mx-5 mx-sm-0 mb-5">
            <img
              className="card-img-top"
              src="./assets/img/our-work-03.jpg"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title light-300 text-dark">
                Leading Digital Solution
              </h5>
              <p className="card-text light-300 text-dark">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiatdolore eu fugiat nulla pariatur.
              </p>
              <span className="text-decoration-none text-primary light-300">
                Read more <i className="bx bxs-hand-right ms-1" />
              </span>
            </div>
          </div>
        </Link>
        <Link
          to="/workSingle"
          className="col-sm-6 col-lg-4 text-decoration-none project social business"
        >
          <div className="service-work overflow-hidden card mx-5 mx-sm-0 mb-5">
            <img
              className="card-img-top"
              src="./assets/img/our-work-04.jpg"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title light-300 text-dark">
                Smart Applications
              </h5>
              <p className="card-text light-300 text-dark">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
              <span className="text-decoration-none text-primary light-300">
                Read more <i className="bx bxs-hand-right ms-1" />
              </span>
            </div>
          </div>
        </Link>
        <Link
          to="/workSingle"
          className="col-sm-6 col-lg-4 text-decoration-none project marketing"
        >
          <div className="service-work overflow-hidden card mx-5 mx-sm-0 mb-5">
            <img
              className="card-img-top"
              src="./assets/img/our-work-05.jpg"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title light-300 text-dark">
                Corporate Stationary
              </h5>
              <p className="card-text light-300 text-dark">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
              <span className="text-decoration-none text-primary light-300">
                Read more <i className="bx bxs-hand-right ms-1" />
              </span>
            </div>
          </div>
        </Link>
        <Link
          to="/workSingle"
          className="col-sm-6 col-lg-4 text-decoration-none project marketing graphic"
        >
          <div className="service-work overflow-hidden card mx-5 mx-sm-0 mb-5">
            <img
              className="card-img-top"
              src="./assets/img/our-work-06.jpg"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title light-300 text-dark">
                8 Financial Tips
              </h5>
              <p className="card-text light-300 text-dark">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <span className="text-decoration-none text-primary light-300">
                Read more <i className="bx bxs-hand-right ms-1" />
              </span>
            </div>
          </div>
        </Link>
      </div>
      <div className="row">
        <div
          className="btn-toolbar justify-content-center pb-4"
          role="toolbar"
          aria-label="Toolbar with button groups"
        >
          <div className="btn-group me-2" role="group" aria-label="First group">
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
  );
};

export default WorkCards;
