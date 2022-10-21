import { useRef, useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useInput from "../hooks/useInput";
import useToggle from "../hooks/useToggle";
import Footer from "./Footer";
import Header from "./Header";

import axios, { LOGIN_ENDPOINT } from "../api/axios";

const Login = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from.pathname || "/";

  const userRef = useRef();
  const pwdRef = useRef();
  const errRef = useRef();

  const [user, resetUser, userAttribs] = useInput("user", "");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [check, toggleCheck] = useToggle("persist", false);

  useEffect(() => {
    pwdRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
    if (user === "") userRef.current.focus();
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_ENDPOINT,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
      resetUser();
      setPwd("");
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };
  return (
    <>
      <Header />
      <section className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-4 border px-3 rounded-3">
            <em ref={errRef} className={errMsg ? "text-error" : ""}>
              {errMsg}
            </em>
            <h1 className="col-12 col-xl-8 h2 text-left text-primary pt-3 mb-3">
              Sign In
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="col-lg-12 mb-4">
                <div className="form-floating">
                  <input
                    type="text"
                    id="email"
                    ref={userRef}
                    autoComplete="off"
                    {...userAttribs}
                    required
                    className="form-control form-control-lg light-300"
                  />
                  <label htmlFor="email light-300">Email:</label>
                </div>
              </div>
              <div className="col-lg-12 mb-4">
                <div className="form-floating">
                  <input
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    ref={pwdRef}
                    required
                    className="form-control form-control-lg light-300"
                  />
                  <label htmlFor="password light-300">Password:</label>
                </div>
              </div>
              <button className="btn btn-secondary rounded-pill px-md-5 px-4 py-2 radius-0 text-light mb-4 light-300">
                Sign In
              </button>
              <div className="form-check">
                <input
                  type="checkbox"
                  id="persist"
                  onChange={toggleCheck}
                  checked={check}
                  className="form-check-input"
                />
                <label className="form-check-label" htmlFor="persist">
                  Trust This Device
                </label>
              </div>
            </form>
            <p className="text-secondary">
              Need an Account?
              <br />
              <span className="text-secondary">
                <Link to="/register">Sign Up</Link>
              </span>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
