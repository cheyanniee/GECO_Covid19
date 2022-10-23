import React from "react";
import { Link } from "react-router-dom";
import Aim from "../components/Aim";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Progress from "../components/Progress";
import Subscribe from "../components/Subscribe";

const About = () => {
  return (
    <>
      <Header />
      {/* Start Banner Hero */}
      <section className="bg-light w-100">
        <div className="container">
          <div className="row d-flex align-items-center py-5">
            <div className="col-lg-6 text-start">
              <h1 className="h2 py-5 text-primary typo-space-line">About Us</h1>
              <p className="light-300">
                Vector illustration credit goes to{" "}
                <Link to="http://freepik.com/" target="_blank">
                  FreePik
                </Link>{" "}
                website. Purple Buzz is provided by TemplateMo. Lorem ipsum
                dolor sit amet, consectetur.
              </p>
            </div>
            <div className="col-lg-6">
              <img src="./assets/img/banner-img-02.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* End Banner Hero */}
      {/* Start Team Member */}
      <section className="container py-5">
        <div className="pt-5 pb-3 d-lg-flex align-items-center gx-5">
          <div className="col-lg-3">
            <h2 className="h2 py-5 typo-space-line">Our Team</h2>
            <p className="text-muted light-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="col-lg-9 row">
            <div className="team-member col-md-4">
              <img
                className="team-member-img img-fluid rounded-circle p-4"
                src="./assets/img/team-01.jpg"
                alt=""
              />
              <ul className="team-member-caption list-unstyled text-center pt-4 text-muted light-300">
                <li>John Doe</li>
                <li>Business Development</li>
              </ul>
            </div>
            <div className="team-member col-md-4">
              <img
                className="team-member-img img-fluid rounded-circle p-4"
                src="./assets/img/team-02.jpg"
                alt=""
              />
              <ul className="team-member-caption list-unstyled text-center pt-4 text-muted light-300">
                <li>Jane Doe</li>
                <li>Media Development</li>
              </ul>
            </div>
            <div className="team-member col-md-4">
              <img
                className="team-member-img img-fluid rounded-circle p-4"
                src="./assets/img/team-03.jpg"
                alt=""
              />
              <ul className="team-member-caption list-unstyled text-center pt-4 text-muted light-300">
                <li>Sam</li>
                <li>Developer</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* End Team Member */}
      {/* Start Our Partner */}
      <section className="bg-secondary py-3">
        <div className="container py-5">
          <h2 className="h2 text-white text-center py-5">Our Partner</h2>
          <div className="row text-center">
            <div className="col-md-3 mb-3">
              <div className="card partner-wap py-5">
                <Link to="#">
                  <i className="display-1 text-white bx bxs-buildings" />
                </Link>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card partner-wap py-5">
                <Link to="#">
                  <i className="display-1 bx text-white bxs-check-shield bx-lg" />
                </Link>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card partner-wap py-5">
                <Link to="#">
                  <i className="display-1 text-white bx bxs-bolt-circle" />
                </Link>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card partner-wap py-5">
                <Link to="#">
                  <i className="display-1 text-white bx bxs-spa" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End Our Partner*/}
      <Progress />
      {/* Start Choice */}
      <section className="why-us banner-bg bg-light">
        <div className="container my-4">
          <div className="row">
            <div className="banner-img col-lg-5">
              <img
                src="./assets/img/work.svg"
                className="rounded img-fluid"
                alt=""
              />
            </div>
            <div className="banner-content col-lg-7 align-self-end">
              <h2 className="h2 pb-3">Why you choose us?</h2>
              <p className="text-muted pb-5 light-300">
                You are allowed to download and use this Purple Buzz template
                for your websites. You are <strong>not allowed</strong> to
                re-distribute this template ZIP file on other template websites.
                It is quite easy to simply copy and repost the ZIP file on any{" "}
                <Link
                  to="https://www.google.com/search?q=free+css"
                  target="_blank"
                >
                  Free CSS collection
                </Link>{" "}
                websites.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End Choice */}
      <Aim />
      <Subscribe />
      <Footer />
    </>
  );
};

export default About;
