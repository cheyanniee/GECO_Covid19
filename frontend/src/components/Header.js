import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useLogout from "../hooks/useLogout";

const Header = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const logout = useLogout();
  const signOut = async () => {
    await logout();
    navigate("/login", { state: { message: "You have logged successfully" } });
  };

  return (
    <nav
      id="main_nav"
      className="navbar navbar-expand-lg navbar-light bg-white shadow"
    >
      <div className="container d-flex justify-content-between align-items-center">
        <Link className="navbar-brand h1" to="/">
          <i className="bx bx-buildings bx-sm text-dark"></i>
          <span className="text-dark h4">Geco</span>{" "}
          <span className="text-primary h4">Buzz</span>
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-toggler-success"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
          id="navbar-toggler-success"
        >
          <div className="flex-fill mx-xl-5 mb-2">
            <ul className="nav navbar-nav d-flex justify-content-between mx-xl-5 text-center text-dark">
              <li className="nav-item">
                <Link
                  className="nav-link btn-outline-primary rounded-pill px-3"
                  to="/"
                >
                  Home
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link
                  className="nav-link btn-outline-primary rounded-pill px-3"
                  to="/about"
                >
                  About
                </Link>
              </li> */}
              <li className="nav-item">
                <Link
                  className="nav-link btn-outline-primary rounded-pill px-3"
                  to="/clinics"
                >
                  Clinics
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link btn-outline-primary rounded-pill px-3"
                  to="/userCovidStatus"
                >
                  COVID status
                </Link>
              </li>
            </ul>
          </div>
          {auth?.token ? (
            <>
              <div className="mx-1 mb-2"></div>
              <div className="navbar align-self-center d-flex">
                {/* <Link className="nav-link" to="">
              <i className="bx bx-bell bx-sm bx-tada-hover text-primary"></i>
              </Link>
              <Link className="nav-link" to="">
              <i className="bx bx-cog bx-sm text-primary"></i>
            </Link> */}
                <Link className="nav-link" to="/userDetails">
                  <i className="bx bx-user-circle bx-sm text-primary"></i>
                </Link>
                <Link className="nav-link" onClick={signOut}>
                  <i className="bx bx-log-out bx-sm text-primary"></i>
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="mx-1 mb-2">
                <Link to="/login">Login</Link>
              </div>
              <div className="mx-1 mb-2">|</div>
              <div className="mx-1 mb-2">
                <Link to="/register">Register</Link>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
