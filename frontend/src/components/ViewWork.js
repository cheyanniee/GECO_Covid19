import React from "react";
import { Link } from "react-router-dom";

const Clinics = () => {
  return (
    <section className="bg-secondary">
      <div className="container py-5">
        <div className="row d-flex justify-content-center text-center">
          <div className="col-lg-2 col-12 text-light align-items-center">
            <i className="display-1 bx bxs-box bx-lg" />
          </div>
          <div className="col-lg-7 col-12 text-light pt-2">
            <h3 className="h4 light-300">Great transformations successful</h3>
            <p className="light-300">
              Quis ipsum suspendisse ultrices gravida.
            </p>
          </div>
          <div className="col-lg-3 col-12 pt-4">
            <Link
              to="#"
              className="btn btn-primary rounded-pill btn-block shadow px-4 py-2"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clinics;
