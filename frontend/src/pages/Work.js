import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import WorkCards from "../components/WorkCards";

const Work = () => {
  return (
    <>
      <Header />
      {/* Start Banner Hero */}
      <div id="work_banner" className="banner-wrapper bg-light w-100 py-5">
        <div className="banner-vertical-center-work container text-light d-flex justify-content-center align-items-center py-5 p-0">
          <div className="banner-content col-lg-8 col-12 m-lg-auto text-center">
            <h1 className="banner-heading h2 display-3 pb-5 semi-bold-600 typo-space-line-center">
              Our Work
            </h1>
            <h3 className="h4 pb-2 regular-400">
              Elit, sed do eiusmod tempor incididunt
            </h3>
            <p className="banner-body pb-2 light-300">
              Vector illustration{" "}
              <Link
                className="text-white"
                to="http://freepik.com/"
                target="_blank"
              >
                Freepik
              </Link>
              . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus.
            </p>
            <button
              type="submit"
              className="btn rounded-pill btn-outline-light px-4 me-4 light-300"
            >
              Learn More
            </button>
            <button
              type="submit"
              className="btn rounded-pill btn-secondary text-light px-4 light-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
      {/* End Banner Hero */}
      <WorkCards />
      {/* Start Feature Work */}
      <section className="bg-light py-5">
        <div className="feature-work container my-4">
          <div className="row d-flex d-flex align-items-center">
            <div className="col-lg-5">
              <h3 className="feature-work-title h4 text-muted light-300">
                Featured Work
              </h3>
              <h1 className="feature-work-heading h2 py-3 semi-bold-600">
                Transform with us
              </h1>
              <p className="feature-work-body text-muted light-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
              <p className="feature-work-footer text-muted light-300">
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                gravida. Risus commodo viverra maecenas. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
            <div className="col-lg-6 offset-lg-1 align-left">
              <div className="row">
                <Link
                  className="col"
                  data-type="image"
                  data-fslightbox="gallery"
                  to="./assets/img/feature-work-1-large.jpg"
                >
                  <img
                    className="img-fluid"
                    src="./assets/img/feature-work-1.jpg"
                    alt=""
                  />
                </Link>
                <Link
                  className="col"
                  data-type="image"
                  data-fslightbox="gallery"
                  to="./assets/img/feature-work-2-large.jpg"
                >
                  <img
                    className="img-fluid"
                    src="./assets/img/feature-work-2.jpg"
                    alt=""
                  />
                </Link>
              </div>
              <div className="row pt-4">
                <Link
                  className="col"
                  data-type="image"
                  data-fslightbox="gallery"
                  to="./assets/img/feature-work-3-large.jpg"
                >
                  <img
                    className="img-fluid"
                    src="./assets/img/feature-work-3.jpg"
                    alt=""
                  />
                </Link>
                <Link
                  className="col"
                  data-type="image"
                  data-fslightbox="gallery"
                  to="./assets/img/feature-work-4-large.jpg"
                >
                  <img
                    className="img-fluid"
                    src="./assets/img/feature-work-4.jpg"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Feature Work */}
      <Footer />
    </>
  );
};

export default Work;
