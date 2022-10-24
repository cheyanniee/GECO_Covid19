import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Contact = () => {
  return (
    <>
      <Header />
      {/* Start Banner Hero */}
      <section className="bg-light">
        <div className="container py-4">
          <div className="row align-items-center justify-content-between">
            <div className="contact-header col-lg-4">
              <h1 className="h2 pb-3 text-primary">Contact</h1>
              <h3 className="h4 regular-400">Elit, sed do eiusmod tempor</h3>
              <p className="light-300">
                Vector illustration is from{" "}
                <Link rel="nofollow" to="https://storyset.com/" target="_blank">
                  StorySet
                </Link>
                . Incididunt ut labore et dolore magna aliqua. Quis ipsum
                suspendisse ultrices gravida.
              </p>
            </div>
            <div className="contact-img col-lg-5 align-items-end col-md-4">
              <img src="./assets/img/banner-img-01.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* End Banner Hero */}
      {/* Start Contact */}
      <section className="container py-5">
        <h1 className="col-12 col-xl-8 h2 text-left text-primary pt-3">
          Create success campaign with us!
        </h1>
        <h2 className="col-12 col-xl-8 h4 text-left regular-400">
          Elit, sed do eiusmod tempor{" "}
        </h2>
        <p className="col-12 col-xl-8 text-left text-muted pb-5 light-300">
          Incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
          ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
          facilisis. Laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate.
        </p>
        <div className="row pb-4">
          <div className="col-lg-4">
            <div className="contact row mb-4">
              <div className="contact-icon col-lg-3 col-3">
                <div className="py-3 mb-2 text-center border rounded text-secondary">
                  <i className="display-6 bx bx-news" />
                </div>
              </div>
              <ul className="contact-info list-unstyled col-lg-9 col-9  light-300">
                <li className="h5 mb-0">Media Contact</li>
                <li className="text-muted">Mr. John Doe</li>
                <li className="text-muted">010-020-0340</li>
              </ul>
            </div>
            <div className="contact row mb-4">
              <div className="contact-icon col-lg-3 col-3">
                <div className="border py-3 mb-2 text-center border rounded text-secondary">
                  <i className="bx bx-laptop display-6" />
                </div>
              </div>
              <ul className="contact-info list-unstyled col-lg-9 col-9 light-300">
                <li className="h5 mb-0">Technical Contact</li>
                <li className="text-muted">Mr. John Stiles</li>
                <li className="text-muted">010-020-0340</li>
              </ul>
            </div>
            <div className="contact row mb-4">
              <div className="contact-icon col-lg-3 col-3">
                <div className="border py-3 mb-2 text-center border rounded text-secondary">
                  <i className="bx bx-money display-6" />
                </div>
              </div>
              <ul className="contact-info list-unstyled col-lg-9 col-9 light-300">
                <li className="h5 mb-0">Billing Contact</li>
                <li className="text-muted">Mr. Richard Miles</li>
                <li className="text-muted">010-020-0340</li>
              </ul>
            </div>
          </div>
          {/* Start Contact Form */}
          <div className="col-lg-8 ">
            <form className="contact-form row" method="post" action="#">
              <div className="col-lg-6 mb-4">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control form-control-lg light-300"
                    id="floatingname"
                    name="inputname"
                    placeholder="Name"
                  />
                  <label htmlFor="floatingname light-300">Name</label>
                </div>
              </div>
              {/* End Input Name */}
              <div className="col-lg-6 mb-4">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control form-control-lg light-300"
                    id="floatingemail"
                    name="inputemail"
                    placeholder="Email"
                  />
                  <label htmlFor="floatingemail light-300">Email</label>
                </div>
              </div>
              {/* End Input Email */}
              <div className="col-lg-6 mb-4">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control form-control-lg light-300"
                    id="floatingphone"
                    name="inputphone"
                    placeholder="Phone"
                  />
                  <label htmlFor="floatingphone light-300">Phone</label>
                </div>
              </div>
              {/* End Input Phone */}
              <div className="col-lg-6 mb-4">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control form-control-lg light-300"
                    id="floatingcompany"
                    name="inputcompany"
                    placeholder="Company Name"
                  />
                  <label htmlFor="floatingcompany light-300">
                    Company Name
                  </label>
                </div>
              </div>
              {/* End Input Company Name */}
              <div className="col-12">
                <div className="form-floating mb-4">
                  <input
                    type="text"
                    className="form-control form-control-lg light-300"
                    id="floatingsubject"
                    name="inputsubject"
                    placeholder="Subject"
                  />
                  <label htmlFor="floatingsubject light-300">Subject</label>
                </div>
              </div>
              {/* End Input Subject */}
              <div className="col-12">
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control light-300"
                    rows={8}
                    placeholder="Message"
                    id="floatingtextarea"
                    defaultValue={""}
                  />
                  <label htmlFor="floatingtextarea light-300">Message</label>
                </div>
              </div>
              {/* End Textarea Message */}
              <div className="col-md-12 col-12 m-auto text-end">
                <button
                  type="submit"
                  className="btn btn-secondary rounded-pill px-md-5 px-4 py-2 radius-0 text-light light-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          {/* End Contact Form */}
        </div>
      </section>
      {/* End Contact */}
      <Footer />
    </>
  );
};

export default Contact;
