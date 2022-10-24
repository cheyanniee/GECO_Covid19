import React, { useRef, useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useFormik } from "formik";
import SearchUsers from "../components/SearchUsers";
import { INITIAL_ADMIN_SEARCH_VALUES, adminSeachSchema } from "../schemas";
import axios, { config, PATIENTS_SEARCH_ENDPOINT } from "../api/axios";
import useAuth from "../hooks/useAuth";

const AdminSearch = () => {
  const { auth } = useAuth();
  const [errMsg, setErrMsg] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          PATIENTS_SEARCH_ENDPOINT,
          config({ token: auth.token })
        );
        console.log("data", response?.data);
        setData(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [auth.token]);

  const tester = (e) => {
    console.log("tester");
    e.preventDefault();
  }

  const onSubmit = async (values, actions) => {
    console.log("submit");
  };

  const inputRef = useRef();
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: INITIAL_ADMIN_SEARCH_VALUES,
    validationSchema: adminSeachSchema,
    onSubmit,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Header />
      <section className="container py-5">
        <h1 className="col-12 col-xl-8 h2 text-left text-primary pt-3">
          Search Users
        </h1>
        <h2 className="col-12 col-xl-8 h4 text-left regular-400">
          For Government Officials Only
        </h2>

        <div className="row pb-4">
          <div className="col-lg-4">
            <div className="contact row mb-4">
              <form className="contact-form row"
                    onSubmit={handleSubmit}>
                <div className="mb-4">
                  <div className="form-floating">
                    <input
                      type="text"
                      className={
                        errors.id && touched.id
                          ? "form-control form-control-lg-error light-300-error"
                          : "form-control form-control-lg light-300"
                      }
                      id="id"
                      placeholder="id"
                      value={values.id}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <label htmlFor="password light-300">id</label>
                    {errors.id && touched.id && (
                      <em className="text-error">{errors.id}</em>
                    )}
                  </div>
                </div>
                <em className="text-error px-3">{errMsg}</em>
                <div>
                  <button
                    onClick={(e) => tester(e)}
                    className="btn btn-secondary rounded-pill px-md-5 px-4 py-2 radius-0 text-light light-300"
                  >
                    View All
                  </button>
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="btn btn-secondary rounded-pill px-md-5 px-4 py-2 radius-0 text-light light-300"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </section>
      <Footer />
    </>
  );
};

export default AdminSearch;
