import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useFormik } from "formik";
import { INITIAL_FORM_VALUES, registerSchema } from "../schemas";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);

  actions.resetForm();
};

const Register = () => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: INITIAL_FORM_VALUES,
    validationSchema: registerSchema,
    onSubmit,
  });
  console.log(errors);
  return (
    <>
      <Header />
      {/* Start Register Form */}
      <section className="container py-5">
        <h1 className="col-12 col-xl-8 h2 text-left text-primary pt-3">
          Registration Form
        </h1>
        <h2 className="col-12 col-xl-8 h4 text-left regular-400">
          For General Public
        </h2>
        <p className="col-12 col-xl-8 text-left text-muted pb-5 light-300">
          Kindly fill in all required fields
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
                <li className="h5 mb-0">MOH COVID-19 HOTLINE</li>
                <li className="text-muted">General Enquiries</li>
                <li className="text-muted">1800 333 9999</li>
              </ul>
            </div>
            <div className="contact row mb-4">
              <div className="contact-icon col-lg-3 col-3">
                <div className="border py-3 mb-2 text-center border rounded text-secondary">
                  <i className="bx bx-laptop display-6" />
                </div>
              </div>
              <ul className="contact-info list-unstyled col-lg-9 col-9 light-300">
                <li className="h5 mb-0">QUARANTINE HOTLINE</li>
                <li className="text-muted">General Line</li>
                <li className="text-muted">6325 9220</li>
              </ul>
            </div>
            <div className="contact row mb-4">
              <div className="contact-icon col-lg-3 col-3">
                <div className="border py-3 mb-2 text-center border rounded text-secondary">
                  <i className="bx bx-money display-6" />
                </div>
              </div>
              <ul className="contact-info list-unstyled col-lg-9 col-9 light-300">
                <li className="h5 mb-0">Hotline Operating Hours:</li>
                <li className="text-muted">Mon to Fri: 8.30am to 6.00pm</li>
                <li className="text-muted">Weekends and PH: Closed </li>
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
                    className={
                      errors.first_name && touched.first_name
                        ? "form-control form-control-lg-error light-300-error"
                        : "form-control form-control-lg light-300"
                    }
                    id="first_name"
                    placeholder="First Name"
                    value={values.first_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="first_name light-300">First Name</label>
                  {errors.first_name && touched.first_name && (
                    <em className="text-error">{errors.first_name}</em>
                  )}
                </div>
              </div>
              {/* End Input First Name */}
              <div className="col-lg-4 mb-4">
                <div className="form-floating">
                  <input
                    type="text"
                    className={
                      errors.last_name && touched.last_name
                        ? "form-control form-control-lg-error light-300-error"
                        : "form-control form-control-lg light-300"
                    }
                    id="last_name"
                    placeholder="Last Name"
                    value={values.last_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="last-name light-300">Last Name</label>
                  {errors.last_name && touched.last_name && (
                    <em className="text-error">{errors.last_name}</em>
                  )}
                </div>
              </div>
              {/* End Input Last_name */}
              <div className="col-lg-4 mb-4">
                <div className="form-floating">
                  <input
                    type="text"
                    className={
                      errors.email && touched.email
                        ? "form-control form-control-lg-error light-300-error"
                        : "form-control form-control-lg light-300"
                    }
                    id="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="email light-300">Email</label>
                  {errors.email && touched.email && (
                    <em className="text-error">{errors.email}</em>
                  )}
                </div>
              </div>
              {/* End Input Email */}
              <div className="col-lg-6 mb-4">
                <div className="form-floating">
                  <input
                    type="password"
                    className={
                      errors.password && touched.password
                        ? "form-control form-control-lg-error light-300-error"
                        : "form-control form-control-lg light-300"
                    }
                    id="password"
                    placeholder="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="password light-300">Password</label>
                  {errors.password && touched.password && (
                    <em className="text-error">{errors.password}</em>
                  )}
                </div>
              </div>
              {/* End Input password */}
              <div className="col-lg-6 mb-4">
                <div className="form-floating">
                  <input
                    type="password"
                    className={
                      errors.confirm_password && touched.confirm_password
                        ? "form-control form-control-lg-error light-300-error"
                        : "form-control form-control-lg light-300"
                    }
                    id="confirm_password"
                    placeholder="Confirm Password"
                    value={values.confirm_password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="confirm_password light-300">
                    Confirm Password
                  </label>
                  {errors.confirm_password && touched.confirm_password && (
                    <em className="text-error">{errors.confirm_password}</em>
                  )}
                </div>
              </div>
              {/* End Input Confirm password */}
              <div className="col-lg-6 mb-4">
                <div className="form-floating">
                  <input
                    type="date"
                    className={
                      errors.dob && touched.dob
                        ? "form-control form-control-lg-error light-300-error"
                        : "form-control form-control-lg light-300"
                    }
                    id="dob"
                    placeholder="dob"
                    value={values.dob}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="dob light-300">Date of Birth</label>
                  {errors.dob && touched.dob && (
                    <em className="text-error">{errors.dob}</em>
                  )}
                </div>
              </div>
              {/* End Input Date of Birth */}
              <div className="col-lg-6 mb-4">
                <div className="form-floating">
                  <input
                    type="number"
                    className={
                      errors.mobile && touched.mobile
                        ? "form-control form-control-lg-error light-300-error"
                        : "form-control form-control-lg light-300"
                    }
                    id="mobile"
                    placeholder="Mobile Number"
                    value={values.mobile}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="mobile light-300">Mobile Number</label>
                  {errors.mobile && touched.mobile && (
                    <em className="text-error">{errors.mobile}</em>
                  )}
                </div>
              </div>
              {/* End Input Mobile */}
              <div className="col-8">
                <div className="form-floating mb-4">
                  <input
                    type="text"
                    className={
                      errors.address && touched.address
                        ? "form-control form-control-lg-error light-300-error"
                        : "form-control form-control-lg light-300"
                    }
                    id="address"
                    placeholder="Address"
                    value={values.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="address light-300">Address</label>
                  {errors.address && touched.address && (
                    <em className="text-error">{errors.address}</em>
                  )}
                </div>
              </div>
              {/* End Input Address */}
              <div className="col-lg-4 mb-4">
                <div className="form-floating">
                  <input
                    type="number"
                    className={
                      errors.postal_code && touched.postal_code
                        ? "form-control form-control-lg-error light-300-error"
                        : "form-control form-control-lg light-300"
                    }
                    id="postal_code"
                    placeholder="Postal Code"
                    value={values.postal_code}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="postal_code light-300">Postal Code</label>
                  {errors.postal_code && touched.postal_code && (
                    <em className="text-error">{errors.postal_code}</em>
                  )}
                </div>
              </div>
              {/* End Input Postal code */}
              <div className="col-md-12 col-12 m-auto text-end">
                <button
                  disabled={isSubmitting}
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