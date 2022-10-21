import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useFormik } from "formik";

const Register = () => {
  const { values, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
      dob: "",
      mobile: "",
      address: "",
      postal_code: "",
    },
  });
  console.log(values);
  return (
    <>
      <Header />
      {/* Start Register Form */}
      <section className="container py-5">
        <h1 className="col-12 col-xl-8 h2 text-left text-primary pt-3">
          Registration Form
        </h1>
        <h2 className="col-12 col-xl-8 h4 text-left regular-400">
          For Normal User
        </h2>
        <p className="col-12 col-xl-8 text-left text-muted pb-5 light-300">
          Kindly fill in all required fills
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
            <form className="contact-form row" onSubmit={handleSubmit}>
              <div className="col-lg-4 mb-4">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control form-control-lg light-300"
                    id="first_name"
                    placeholder="First Name"
                    value={values.first_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="floatingFirstName light-300">
                    First Name
                  </label>
                </div>
              </div>
              {/* End Input First Name */}
              <div className="col-lg-4 mb-4">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control form-control-lg light-300"
                    id="last_name"
                    placeholder="Last Name"
                    value={values.last_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="floatingLastName light-300">Last Name</label>
                </div>
              </div>
              {/* End Input Last_name */}
              <div className="col-lg-4 mb-4">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control form-control-lg light-300"
                    id="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="floatingemail light-300">Email</label>
                </div>
              </div>
              {/* End Input Email */}
              <div className="col-lg-6 mb-4">
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control form-control-lg light-300"
                    id="password"
                    placeholder="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="floatingPwd light-300">Password</label>
                </div>
              </div>
              {/* End Input password */}
              <div className="col-lg-6 mb-4">
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control form-control-lg light-300"
                    id="confirm_password"
                    placeholder="Confirm Password"
                    value={values.confirm_password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="floatingcompany light-300">
                    Confirm Password
                  </label>
                </div>
              </div>
              {/* End Input Confirm password */}
              <div className="col-lg-6 mb-4">
                <div className="form-floating">
                  <input
                    type="date"
                    className="form-control form-control-lg light-300"
                    id="dob"
                    placeholder="dob"
                    value={values.dob}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="floatingdob light-300">Date of Birth</label>
                </div>
              </div>
              {/* End Input Date of Birth */}
              <div className="col-lg-6 mb-4">
                <div className="form-floating">
                  <input
                    type="number"
                    className="form-control form-control-lg light-300"
                    id="mobile"
                    placeholder="Mobile Number"
                    value={values.mobile}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="floatingcompany light-300">
                    Mobile Number
                  </label>
                </div>
              </div>
              {/* End Input Mobile */}
              <div className="col-8">
                <div className="form-floating mb-4">
                  <input
                    type="text"
                    className="form-control form-control-lg light-300"
                    id="address"
                    placeholder="Address"
                    value={values.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="floatingAddress light-300">Address</label>
                </div>
              </div>
              {/* End Input Address */}
              <div className="col-lg-4 mb-4">
                <div className="form-floating">
                  <input
                    type="number"
                    className="form-control form-control-lg light-300"
                    id="postal_code"
                    placeholder="Postal Code"
                    value={values.postal_code}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="floatingPostalCode light-300">
                    Postal Code
                  </label>
                </div>
              </div>
              {/* End Input Postal code */}
              <div className="col-md-12 col-12 m-auto text-end">
                <button
                  type="submit"
                  className="btn btn-secondary rounded-pill px-md-5 px-4 py-2 radius-0 text-light light-300"
                >
                  Register!
                </button>
              </div>
            </form>
          </div>
          {/* End Contact Form */}
        </div>
      </section>
      {/* End Register Form */}
      <Footer />
    </>
  );
};

export default Register;
