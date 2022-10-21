import React from "react";

const Progress = () => {
  return (
    <section className="bg-white py-5">
      <div className="container my-4">
        <h1 className="creative-heading h2 pb-3">
          Creative &amp; Make Perfect
        </h1>
        <div className="creative-content row py-3">
          <div className="col-md-5">
            <p className="text-muted col-lg-8 light-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida Risus.
            </p>
          </div>
          <div className="creative-progress col-md-7">
            <div className="row mt-4 mt-sm-2">
              <div className="col-6">
                <h4 className="h5">Development</h4>
              </div>
              <div className="col-6 text-right">66%</div>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "66%" }}
                aria-valuenow={66}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="row mt-4 mt-sm-2">
              <div className="col-6">
                <h4 className="h5">Design</h4>
              </div>
              <div className="col-6 text-right">90%</div>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "90%" }}
                aria-valuenow={90}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="row mt-4 mt-sm-2">
              <div className="col-6">
                <h4 className="h5">Marketing</h4>
              </div>
              <div className="col-6 text-right">74%</div>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "74%" }}
                aria-valuenow={74}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;
