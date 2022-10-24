import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const WorkSingle = () => {
  const [largeImg, setLargeImg] = useState("./assets/img/work-slide-04.jpg");
  return (
    <>
      <Header />
      {/* Start Banner Hero */}
      <div id="work_single_banner" className="bg-light w-100">
        <div className="container-fluid text-light d-flex justify-content-center align-items-center border-0 rounded-0 p-0 py-5">
          <div className="banner-content col-lg-8 m-lg-auto text-center py-5 px-3">
            <h1 className="banner-heading h2 pb-5 typo-space-line-center">
              Digital Marketing{/*<h1*/}
            </h1>
            <h3 className="h4 pb-2 light-300">
              Voluptatem accusantium doloremque
            </h3>
            <p className="banner-footer light-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Integer ut ipsum eu libero venenatis euismod.
            </p>
          </div>
        </div>
      </div>
      {/* End Banner Hero */}
      {/* Start Work Sigle */}
      <section className="container py-5">
        <div className="row pt-5">
          <div className="worksingle-content col-lg-8 m-auto text-left justify-content-center">
            <h2 className="worksingle-heading h3 pb-3 light-300 typo-space-line">
              Digital Marketing Service
            </h2>
            <p className="worksingle-footer py-3 text-muted light-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        {/* End Blog Cover */}
        <div className="row justify-content-center pb-4">
          <div className="col-lg-8">
            <div id="templatemo-slide-link-target" className="card mb-3">
              <img className="img-fluid border rounded" src={largeImg} alt="" />
            </div>
            <div className="worksingle-slide-footer row">
              {/*Start Controls*/}
              <div className="col-1 align-self-center">
                <a
                  href="#multi-item-example"
                  role="button"
                  data-bs-slide="prev"
                >
                  <i className="bx bxs-chevron-left bx-sm text-dark" />
                </a>
              </div>
              {/*End Controls*/}
              {/*Start Carousel Wrapper*/}
              <div
                id="multi-item-example"
                className="col-10 carousel slide"
                data-bs-ride="carousel"
              >
                {/*Start Slides*/}
                <div className="carousel-inner" role="listbox">
                  {/*First slide*/}
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col">
                        <img
                          className="img-fluid border rounded"
                          src="./assets/img/work-slide-06-small.jpg"
                          alt=""
                          role="button"
                          onClick={() =>
                            setLargeImg("./assets/img/work-slide-06.jpg")
                          }
                        />
                      </div>
                      <div className="col">
                        <img
                          className="img-fluid border rounded"
                          src="./assets/img/work-slide-05-small.jpg"
                          alt=""
                          role="button"
                          onClick={() =>
                            setLargeImg("./assets/img/work-slide-05.jpg")
                          }
                        />
                      </div>
                      <div className="col">
                        <img
                          className="img-fluid border rounded"
                          src="./assets/img/work-slide-04-small.jpg"
                          alt=""
                          role="button"
                          onClick={() =>
                            setLargeImg("./assets/img/work-slide-04.jpg")
                          }
                        />
                      </div>
                      <div className="col">
                        <img
                          className="img-fluid border rounded"
                          src="./assets/img/work-slide-03-small.jpg"
                          alt=""
                          role="button"
                          onClick={() =>
                            setLargeImg("./assets/img/work-slide-03.jpg")
                          }
                        />
                      </div>
                      <div className="col">
                        <img
                          className="img-fluid border rounded"
                          src="./assets/img/work-slide-01-small.jpg"
                          alt=""
                          role="button"
                          onClick={() =>
                            setLargeImg("./assets/img/work-slide-01.jpg")
                          }
                        />
                      </div>
                    </div>
                  </div>
                  {/*/.First slide*/}
                  {/*Second slide*/}
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col">
                        <img
                          className="img-fluid border rounded"
                          src="./assets/img/work-slide-01-small.jpg"
                          alt=""
                          role="button"
                          onClick={() =>
                            setLargeImg("./assets/img/work-slide-01.jpg")
                          }
                        />
                      </div>
                      <div className="col">
                        <img
                          className="img-fluid border rounded"
                          src="./assets/img/work-slide-03-small.jpg"
                          alt=""
                          role="button"
                          onClick={() =>
                            setLargeImg("./assets/img/work-slide-03.jpg")
                          }
                        />
                      </div>
                      <div className="col">
                        <img
                          className="img-fluid border rounded"
                          src="./assets/img/work-slide-02-small.jpg"
                          alt=""
                          role="button"
                          onClick={() =>
                            setLargeImg("./assets/img/work-slide-02.jpg")
                          }
                        />
                      </div>
                      <div className="col">
                        <img
                          className="img-fluid border rounded"
                          src="./assets/img/work-slide-01-small.jpg"
                          alt=""
                          role="button"
                          onClick={() =>
                            setLargeImg("./assets/img/work-slide-01.jpg")
                          }
                        />
                      </div>
                      <div className="col">
                        <img
                          className="img-fluid border rounded"
                          src="./assets/img/work-slide-06-small.jpg"
                          alt=""
                          role="button"
                          onClick={() =>
                            setLargeImg("./assets/img/work-slide-06.jpg")
                          }
                        />
                      </div>
                    </div>
                  </div>
                  {/*/.Second slide*/}
                  {/*Second slide*/}
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col">
                        <img
                          className="img-fluid border rounded"
                          src="./assets/img/work-slide-01-small.jpg"
                          alt=""
                          role="button"
                          onClick={() =>
                            setLargeImg("./assets/img/work-slide-01.jpg")
                          }
                        />
                      </div>
                      <div className="col">
                        <img
                          className="img-fluid border rounded"
                          src="./assets/img/work-slide-03-small.jpg"
                          alt=""
                          role="button"
                          onClick={() =>
                            setLargeImg("./assets/img/work-slide-03.jpg")
                          }
                        />
                      </div>
                      <div className="col">
                        <img
                          className="img-fluid border rounded"
                          src="./assets/img/work-slide-02-small.jpg"
                          alt=""
                          role="button"
                          onClick={() =>
                            setLargeImg("./assets/img/work-slide-02.jpg")
                          }
                        />
                      </div>
                      <div className="col">
                        <img
                          className="img-fluid border rounded"
                          src="./assets/img/work-slide-01-small.jpg"
                          alt=""
                          role="button"
                          onClick={() =>
                            setLargeImg("./assets/img/work-slide-01.jpg")
                          }
                        />
                      </div>
                      <div className="col">
                        <img
                          className="img-fluid border rounded"
                          src="./assets/img/work-slide-06-small.jpg"
                          alt=""
                          role="button"
                          onClick={() =>
                            setLargeImg("./assets/img/work-slide-06.jpg")
                          }
                        />
                      </div>
                    </div>
                  </div>
                  {/*/.Second slide*/}
                </div>
                {/*End Slides*/}
              </div>
              {/*End Carousel Wrapper*/}
              {/*Start Controls*/}
              <div className="col-1 align-self-center text-end">
                <a
                  href="#multi-item-example"
                  role="button"
                  data-bs-slide="next"
                >
                  <i className="bx bxs-chevron-right bx-sm text-dark" />
                </a>
              </div>
              {/*End Controls*/}
            </div>
          </div>
        </div>
        {/* End Slider */}
        <div className="row">
          <div className="col-md-8 m-auto text-left justify-content-center">
            <p className="pt-5 text-muted light-300">
              You are permitted to download, modify and use Purple Buzz template
              for your websites. You are <strong>not permitted</strong> to
              re-distribute this template ZIP file on any other template
              websites. It is super easy to simply copy and repost the ZIP file
              on any{" "}
              <Link
                rel="nofollow"
                to="https://www.google.com/search?q=free+css"
                target="_blank"
              >
                Free CSS
              </Link>{" "}
              template websites.
            </p>
          </div>
        </div>
        {/* End Paragrph */}
        <div className="row">
          <div className="col-md-8 m-auto text-left justify-content-center">
            <p className="display-6 py-4 ps-4 border border-5 border-top-0 border-end-0 border-bottom-0 border-start">
              <i>
                "Vestibulum vestibulum est eu lorem laoreet suscipit. Duis
                auctor, metus vel sollicitudin hendrerit, elit neque pulvinar
                magna, non sodales orci turpis blandit quam."
              </i>
            </p>
            <p className="text-muted light-300">
              Nam tortor quam, aliquet vel nibh sit amet, faucibus bibendum
              nisl. Donec vehicula nulla justo, vel sodales massa vestibulum
              nec. Praesent non orci sed massa fringilla rutrum at et odio.
              Quisque est orci, elementum sed neque ac, suscipit consectetur
              leo. Cras fermentum luctus cursus. Ut porta, augue vel tempus
              congue, augue purus vulputate ex, lacinia lobortis arcu metus sed
              lectus.
            </p>
          </div>
        </div>
        {/* End Qute */}
        <div className="row justify-content-center">
          <div className="col-lg-8 pt-4 pb-4">
            <div className="ratio ratio-16x9">
              <iframe
                title="video"
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/1z--ZRS5x5U"
                allowFullScreen
              />
            </div>
          </div>
        </div>
        {/* End Video */}
        <div className="row justify-content-center">
          <div className="col-lg-8 ml-auto mr-auto pt-3 pb-4">
            <p className="text-muted light-300">
              Ed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla.
            </p>
          </div>
        </div>
        {/* End Work Sigle */}
        {/* Start Comment */}
        <div className="row justify-content-center">
          <div className="worksingle-comment-heading col-8 m-auto pb-3">
            <h4 className="h5">Comments</h4>
          </div>
        </div>
        <div className="row pb-4">
          <div className="worksingle-comment-body col-md-8 m-auto">
            <div className="d-flex">
              <div>
                <img
                  className="rounded-circle"
                  src="./assets/img/team-05.jpg"
                  style={{ width: "50px" }}
                  alt=""
                />
              </div>
              <div className="comment-body">
                <div className="comment-header d-flex justify-content-between ms-3">
                  <div className="header text-start">
                    <h5 className="h6">John Doe</h5>
                    <p className="text-muted light-300">10 mins ago</p>
                  </div>
                  <Link to="#" className="text-decoration-none text-secondary">
                    <i className="bx bxs-share me-2" />
                    Reply
                  </Link>
                </div>
                <div className="footer">
                  <div className="card-body border ms-3 light-300">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Comment */}
        <div className="row pb-4">
          <div className="col-lg-8 m-auto">
            <div className="d-flex">
              <div>
                <img
                  className="rounded-circle"
                  src="./assets/img/team-01.jpg"
                  style={{ width: "50px" }}
                  alt=""
                />
              </div>
              <div className="comment-body">
                <div className="comment-header d-flex justify-content-between ms-3">
                  <div className="header text-start">
                    <h5 className="h6">Jane Doe</h5>
                    <p className="text-muted light-300">5 mins ago</p>
                  </div>
                  <Link to="#" className="text-decoration-none text-secondary">
                    <i className="bx bxs-share me-2" />
                    Reply
                  </Link>
                </div>
                <div className="footer">
                  <div className="card-body border ms-3 light-300">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Comment */}
        <div className="row pb-4">
          <div className="col-lg-8 m-auto">
            <div className="d-flex ml-4">
              <div>
                <img
                  className="rounded-circle"
                  src="./assets/img/team-05.jpg"
                  style={{ width: "50px" }}
                  alt=""
                />
              </div>
              <div className="comment-body">
                <div className="comment-header d-flex justify-content-between ms-3">
                  <div className="header text-start">
                    <h5 className="h6">John Doe</h5>
                    <p className="text-muted light-300">15 mins ago</p>
                  </div>
                  <Link to="#" className="text-decoration-none text-secondary">
                    <i className="bx bxs-share me-2" />
                    Reply
                  </Link>
                </div>
                <div className="footer">
                  <div className="card-body border ms-3 light-300">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Comment */}
        <div className="row pb-4">
          <div className="col-lg-8 m-auto">
            <div className="d-flex ml-5">
              <div>
                <img
                  className="rounded-circle"
                  src="./assets/img/team-01.jpg"
                  style={{ width: "50px" }}
                  alt=""
                />
              </div>
              <div className="comment-body">
                <div className="comment-header d-flex justify-content-between ms-3">
                  <div className="header text-start">
                    <h5 className="h6">Jane Doe</h5>
                    <p className="text-muted light-300">16 mins ago</p>
                  </div>
                  <Link to="#" className="text-decoration-none text-secondary">
                    <i className="bx bxs-share me-2" />
                    Reply
                  </Link>
                </div>
                <div className="footer">
                  <div className="card-body border ms-3 light-300">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Comment */}
        <div className="row pb-4">
          <div className="worksingle-comment-footer col-lg-8 m-auto">
            <h4 className="h5">Leave Comment</h4>
            <form className="col-md-12 m-auto" method="POST" action="#">
              <div className="form-group">
                <label
                  className="pb-2 pt-sm-0 pt-4 light-300"
                  htmlFor="inputmessage"
                >
                  Your Comment
                </label>
                <textarea
                  className="form-control form-control-lg light-300"
                  id="inputmessage"
                  name="inputmessage"
                  placeholder="Your Comment"
                  rows={5}
                  defaultValue={""}
                />
              </div>
              <div className="row py-4">
                <div className="col-lg-6">
                  <label className="pb-2 light-300" htmlFor="inputname">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg light-300"
                    id="inputname"
                    name="inputname"
                    placeholder="Name"
                  />
                </div>
                <div className="col-lg-6">
                  <label
                    className="pb-2 pt-sm-0 pt-4 light-300"
                    htmlFor="inputemail"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-lg light-300"
                    id="inputemail"
                    name="inputemail"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="form-row pt-2">
                <div className="col-md-12 col-10 text-end">
                  <button
                    type="submit"
                    className="btn btn-secondary text-white px-md-4 px-2 py-md-3 py-1 radius-0 light-300"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* End Comment Form */}
      </section>
      {/* End Work Sigle */}
      {/* Start Related Post */}
      <article className="container-fluid bg-light">
        <div className="container">
          <div className="worksingle-related-header row">
            <h1 className="h2 py-5">Related Post</h1>
            <div className="col-md-12 text-left justify-content-center">
              <div className="row gx-5">
                <div className="col-sm-6 col-lg-4 mb-5">
                  <Link
                    to="#"
                    className="related-content card text-decoration-none overflow-hidden h-100"
                  >
                    <img
                      className="related-img card-img-top"
                      src="./assets/img/related-post-01.jpg"
                      alt=""
                    />
                    <div className="related-body card-body p-4">
                      <h5 className="card-title h6 m-0 semi-bold-600 text-dark">
                        Digital Marketing
                      </h5>
                      <p className="card-text pt-2 mb-1 light-300 text-dark">
                        Lorem ipsum dolor sit amet, consectetur.
                      </p>
                      <div className="d-flex justify-content-between">
                        <span className="text-primary light-300">
                          Read more
                        </span>
                        <div className="light-300">
                          <i className="bx-fw bx bx-heart me-1" />5
                          <i className="bx-fw bx bx-chat    ms-1 me-1" />3
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-sm-6 col-lg-4 mb-5">
                  <Link
                    to="#"
                    className="related-content card text-decoration-none overflow-hidden h-100"
                  >
                    <img
                      className="related-img card-img-top"
                      src="./assets/img/related-post-02.jpg"
                      alt=""
                    />
                    <div className="related-body card-body p-4">
                      <h5 className="card-title h6 m-0 semi-bold-600 text-dark">
                        App Development
                      </h5>
                      <p className="card-text pt-2 mb-1 light-300 text-dark">
                        Tempor incididunt ut labore et dolore.
                      </p>
                      <div className="d-flex justify-content-between">
                        <span className="text-primary light-300">
                          Read more
                        </span>
                        <div className="light-300">
                          <i className="bx-fw bx bx-heart me-1" />
                          11
                          <i className="bx-fw bx bx-chat    ms-1 me-1" />9
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-sm-6 col-lg-4 mb-5">
                  <Link
                    to="#"
                    className="related-content card text-decoration-none overflow-hidden h-100"
                  >
                    <img
                      className="related-img card-img-top"
                      src="./assets/img/related-post-03.jpg"
                      alt=""
                    />
                    <div className="related-body card-body p-4">
                      <h5 className="card-title h6 m-0 semi-bold-600 text-dark">
                        Digital Marketing
                      </h5>
                      <p className="card-text pt-2 mb-1 light-300 text-dark">
                        Consectetur adipiscing elit.
                      </p>
                      <div className="d-flex justify-content-between">
                        <span className="text-primary light-300">
                          Read more
                        </span>
                        <div className="light-300">
                          <i className="bx-fw bx bx-heart me-1" />
                          31
                          <i className="bx-fw bx bx-chat    ms-1 me-1" />2
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      {/* End Related Post */}
      <Footer />
    </>
  );
};

export default WorkSingle;
