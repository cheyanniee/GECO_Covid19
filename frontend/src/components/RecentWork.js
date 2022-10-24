import React from "react";
import { Link } from "react-router-dom";

const RecentWork = () => {
  return (
    <section className="py-5 mb-5">
      <div className="container">
        <div className="recent-work-header row text-center pb-5">
          <h2 className="col-md-6 m-auto h2 semi-bold-600 py-5">
            Recent Works
          </h2>
        </div>
        <div className="row gy-5 g-lg-5 mb-4">
          {/* Start Recent Work */}
          <div className="col-md-4 mb-3">
            <Link
              to="#"
              className="recent-work card border-0 shadow-lg overflow-hidden"
            >
              <img
                className="recent-work-img card-img"
                src="./assets/img/recent-work-01.jpg"
                alt=""
              />
              <div className="recent-work-vertical card-img-overlay d-flex align-items-end">
                <div className="recent-work-content text-start mb-3 ml-3 text-dark">
                  <h3 className="card-title light-300">Social Media</h3>
                  <p className="card-text">
                    Ullamco laboris nisi ut aliquip ex
                  </p>
                </div>
              </div>
            </Link>
          </div>
          {/* End Recent Work */}
          {/* Start Recent Work */}
          <div className="col-md-4 mb-3">
            <Link
              to="#"
              className="recent-work card border-0 shadow-lg overflow-hidden"
            >
              <img
                className="recent-work-img card-img"
                src="./assets/img/recent-work-02.jpg"
                alt=""
              />
              <div className="recent-work-vertical card-img-overlay d-flex align-items-end">
                <div className="recent-work-content text-start mb-3 ml-3 text-dark">
                  <h3 className="card-title light-300">Web Marketing</h3>
                  <p className="card-text">Psum officia anim id est laborum.</p>
                </div>
              </div>
            </Link>
          </div>
          {/* End Recent Work */}
          {/* Start Recent Work */}
          <div className="col-md-4 mb-3">
            <Link
              to="#"
              className="recent-work card border-0 shadow-lg overflow-hidden"
            >
              <img
                className="recent-work-img card-img"
                src="./assets/img/recent-work-03.jpg"
                alt=""
              />
              <div className="recent-work-vertical card-img-overlay d-flex align-items-end">
                <div className="recent-work-content text-start mb-3 ml-3 text-dark">
                  <h3 className="card-title light-300">R &amp; D</h3>
                  <p className="card-text">Sum dolor sit consencutur</p>
                </div>
              </div>
            </Link>
          </div>
          {/* End Recent Work */}
          {/* Start Recent Work */}
          <div className="col-md-4 mb-3">
            <Link
              to="#"
              className="recent-work card border-0 shadow-lg overflow-hidden"
            >
              <img
                className="recent-work-img card-img"
                src="./assets/img/recent-work-04.jpg"
                alt=""
              />
              <div className="recent-work-vertical card-img-overlay d-flex align-items-end">
                <div className="recent-work-content text-start mb-3 ml-3 text-dark">
                  <h3 className="card-title light-300">Public Relation</h3>
                  <p className="card-text">Lorem ipsum dolor sit amet</p>
                </div>
              </div>
            </Link>
          </div>
          {/* End Recent Work */}
          {/* Start Recent Work */}
          <div className="col-md-4 mb-3">
            <Link
              to="#"
              className="recent-work card border-0 shadow-lg overflow-hidden"
            >
              <img
                className="recent-work-img card-img"
                src="./assets/img/recent-work-05.jpg"
                alt=""
              />
              <div className="recent-work-vertical card-img-overlay d-flex align-items-end">
                <div className="recent-work-content text-start mb-3 ml-3 text-dark">
                  <h3 className="card-title light-300">Branding</h3>
                  <p className="card-text">Put enim ad minim veniam</p>
                </div>
              </div>
            </Link>
          </div>
          {/* End Recent Work */}
          {/* Start Recent Work */}
          <div className="col-md-4 mb-3">
            <Link
              to="#"
              className="recent-work card border-0 shadow-lg overflow-hidden"
            >
              <img
                className="recent-work-img card-img"
                src="./assets/img/recent-work-06.jpg"
                alt=""
              />
              <div className="recent-work-vertical card-img-overlay d-flex align-items-end">
                <div className="recent-work-content text-start mb-3 ml-3 text-dark">
                  <h3 className="card-title light-300">Creative Design</h3>
                  <p className="card-text">Mollit anim id est laborum.</p>
                </div>
              </div>
            </Link>
          </div>
          {/* End Recent Work */}
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
