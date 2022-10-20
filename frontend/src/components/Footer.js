import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary pt-4">
      <div className="container">
        <div className="row py-4">
          <div className="col-lg-3 col-12 align-left">
            <Link className="navbar-brand" to="index.html">
              <i className="bx bx-buildings bx-sm text-light" />
              <span className="text-light h5">Purple</span>{" "}
              <span className="text-light h5 semi-bold-600">Buzz</span>
            </Link>
            <p className="text-light my-lg-4 my-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut.
            </p>
            <ul className="list-inline footer-icons light-300">
              <li className="list-inline-item m-0">
                <Link
                  className="text-light"
                  target="_blank"
                  to="http://facebook.com/"
                >
                  <i className="bx bxl-facebook-square bx-md" />
                </Link>
              </li>
              <li className="list-inline-item m-0">
                <Link
                  className="text-light"
                  target="_blank"
                  to="https://www.linkedin.com/"
                >
                  <i className="bx bxl-linkedin-square bx-md" />
                </Link>
              </li>
              <li className="list-inline-item m-0">
                <Link
                  className="text-light"
                  target="_blank"
                  to="https://www.whatsapp.com/"
                >
                  <i className="bx bxl-whatsapp-square bx-md" />
                </Link>
              </li>
              <li className="list-inline-item m-0">
                <Link
                  className="text-light"
                  target="_blank"
                  to="https://www.flickr.com/"
                >
                  <i className="bx bxl-flickr-square bx-md" />
                </Link>
              </li>
              <li className="list-inline-item m-0">
                <Link
                  className="text-light"
                  target="_blank"
                  to="https://www.medium.com/"
                >
                  <i className="bx bxl-medium-square bx-md" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-4 my-sm-0 mt-4">
            <h3 className="h4 pb-lg-3 text-light light-300">Our Company</h3>
            <ul className="list-unstyled text-light light-300">
              <li className="pb-2">
                <i className="bx-fw bx bxs-chevron-right bx-xs" />
                <Link
                  className="text-decoration-none text-light"
                  to="index.html"
                >
                  Home
                </Link>
              </li>
              <li className="pb-2">
                <i className="bx-fw bx bxs-chevron-right bx-xs" />
                <Link
                  className="text-decoration-none text-light py-1"
                  to="about.html"
                >
                  About Us
                </Link>
              </li>
              <li className="pb-2">
                <i className="bx-fw bx bxs-chevron-right bx-xs" />
                <Link
                  className="text-decoration-none text-light py-1"
                  to="work.html"
                >
                  Work
                </Link>
              </li>
              <li className="pb-2">
                <i className="bx-fw bx bxs-chevron-right bx-xs" />
                <Link
                  className="text-decoration-none text-light py-1"
                  to="pricing.html"
                >
                  Price
                </Link>
              </li>
              <li className="pb-2">
                <i className="bx-fw bx bxs-chevron-right bx-xs" />
                <Link
                  className="text-decoration-none text-light py-1"
                  to="contact.html"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-4 my-sm-0 mt-4">
            <h2 className="h4 pb-lg-3 text-light light-300">Our Works</h2>
            <ul className="list-unstyled text-light light-300">
              <li className="pb-2">
                <i className="bx-fw bx bxs-chevron-right bx-xs" />
                <Link className="text-decoration-none text-light py-1" to="#">
                  Branding
                </Link>
              </li>
              <li className="pb-2">
                <i className="bx-fw bx bxs-chevron-right bx-xs" />
                <Link className="text-decoration-none text-light py-1" to="#">
                  Business
                </Link>
              </li>
              <li className="pb-2">
                <i className="bx-fw bx bxs-chevron-right bx-xs" />
                <Link className="text-decoration-none text-light py-1" to="#">
                  Marketing
                </Link>
              </li>
              <li className="pb-2">
                <i className="bx-fw bx bxs-chevron-right bx-xs" />
                <Link className="text-decoration-none text-light py-1" to="#">
                  Social Media
                </Link>
              </li>
              <li className="pb-2">
                <i className="bx-fw bx bxs-chevron-right bx-xs" />
                <Link className="text-decoration-none text-light py-1" to="#">
                  Digital Solution
                </Link>
              </li>
              <li className="pb-2">
                <i className="bx-fw bx bxs-chevron-right bx-xs" />
                <Link className="text-decoration-none text-light py-1" to="#">
                  Graphic
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-4 my-sm-0 mt-4">
            <h2 className="h4 pb-lg-3 text-light light-300">For Client</h2>
            <ul className="list-unstyled text-light light-300">
              <li className="pb-2">
                <i className="bx-fw bx bx-phone bx-xs" />
                <Link className="text-decoration-none text-light py-1" to="">
                  010-020-0340
                </Link>
              </li>
              <li className="pb-2">
                <i className="bx-fw bx bx-mail-send bx-xs" />
                <Link
                  className="text-decoration-none text-light py-1"
                  to="mailto:info@company.com"
                >
                  info@company.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-100 bg-primary py-3">
        <div className="container">
          <div className="row pt-2">
            <div className="col-lg-6 col-sm-12">
              <p className="text-lg-start text-center text-light light-300">
                © Copyright 2021 Purple Buzz Company. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-6 col-sm-12">
              <p className="text-lg-end text-center text-light light-300">
                Designed by{" "}
                <Link
                  rel="sponsored"
                  className="text-decoration-none text-light"
                  to="https://templatemo.com/"
                  target="_blank"
                >
                  <strong>TemplateMo</strong>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
