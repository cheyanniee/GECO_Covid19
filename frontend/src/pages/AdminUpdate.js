import React, { useRef, useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useFormik } from "formik";
import { INITIAL_UPDATE_AREAS_VALUES, updateAreasSchema } from "../schemas";
import axios, { AFFECTED_AREAS_ENDPOINT, UPDATE_AREAS_ENDPOINT, config } from "../api/axios";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const AdminUpdate = () => {
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  const { auth } = useAuth();

  const [affected, setAffected] = useState([]);
  const [areas, setAreas] = useState([]);
  const [postals, setPostals] = useState([]);
  const [areaID, setAreaID] = useState("");

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await axios.get(
                  AFFECTED_AREAS_ENDPOINT
              );
              console.log("data", response?.data);
              setAffected(response?.data);
          } catch (error) {
              console.log(error);
          }
      };
      fetchData();
  }, []);

  const repopulateAreas = (e) => {
    var tempAreas = [];
    for (let i=0; i<affected.length; i++) {
        if (affected[i].regionName.toLowerCase() === e.target.value.toLowerCase()) {
            tempAreas.push(affected[i].areaName);
        }
    }
    setAreas(tempAreas);
    console.log("temp areas: ", tempAreas);
  }

  const getPostalCode = (e) => {
    console.log(e.target.value, values.regionName);

    for (let i=0; i<affected.length; i++) {
        if ((affected[i].regionName == values.regionName) && (affected[i].areaName == e.target.value)) {
            values.id = affected[i].id;
            setPostals([affected[i].postcode]);
            console.log(affected[i]);
            console.log(postals);
            break;
        }
    }
  }

  const onSubmit = async (values, actions) => {
    values = { ...values };
    console.log("params: ", values);
    try {
      const response = await axios.post(UPDATE_AREAS_ENDPOINT, values, config({ token: auth.token }));
      console.log(response.data);
      actions.resetForm();
      navigate("/", {
        state: { message: "Update successful!" },
      });
    } catch (error) {
      console.log(error.response);
      setErrMsg(error.response.data.message);
    }
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
    initialValues: INITIAL_UPDATE_AREAS_VALUES,
    validationSchema: updateAreasSchema,
    onSubmit,
  });
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Header />
      {/* Start Update Form */}
      <section className="container py-5">
        <h1 className="col-12 col-xl-8 h2 text-left text-primary pt-3">
          Update Affected Areas Form
        </h1>
        <h2 className="col-12 col-xl-8 h4 text-left regular-400">
          For Government Officials Only
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
          {/* Start Update Details */}
          <div className="col-lg-8 ">
            <form className="contact-form row" onSubmit={handleSubmit}>
              <div className="col-lg-4 mb-4">
                <div className="form-floating">
                    <select
                      className={
                        errors.regionName && touched.regionName
                          ? "form-control form-control-lg-error light-300-error"
                          : "form-control form-control-lg light-300"
                      }
                      id="regionName"
                      placeholder="Region Name"
                      value={values.regionName}
                      onChange= {e => {handleChange(e); repopulateAreas(e);}}
                      onBlur={handleBlur}
                    >
                      <option value="" label="Select a Region">Select a Region{" "}</option>
                      <option value="Central" label="Central">Central</option>
                      <option value="North" label="North">North</option>
                      <option value="South" label="South">South</option>
                      <option value="East" label="East">East</option>
                      <option value="West" label="West">West</option>
                    </select>
                    <label htmlFor="last-name light-300">Region Name</label>
                    {errors.regionName && touched.regionName && (
                      <em className="text-error">{errors.regionName}</em>
                    )}
                  </div>
              </div>
              {/* End Input regionName */}
              <div className="col-lg-4 mb-4">
                <div className="form-floating">
                  <select
                    className={
                      errors.areaName && touched.areaName
                        ? "form-control form-control-lg-error light-300-error"
                        : "form-control form-control-lg light-300"
                    }
                    id="areaName"
                    placeholder="Area Name"
                    value={values.areaName}
                    onChange= {e => {handleChange(e); getPostalCode(e);}}
                    onBlur={handleBlur}
                  >
                    <option value="" label="Select an Area">Select an Area{" "}</option>
                    {areas.map((area) => (<option value={area} label={area}>{area}</option>))}
                  </select>
                  <label htmlFor="last-name light-300">Area Name</label>
                  {errors.areaName && touched.areaName && (
                    <em className="text-error">{errors.areaName}</em>
                  )}
                </div>
              </div>
              {/* End Input areaName */}
              <div className="col-lg-4 mb-4">
                <div className="form-floating">
                  <select
                    className={
                      errors.postcode && touched.postcode
                        ? "form-control form-control-lg-error light-300-error"
                        : "form-control form-control-lg light-300"
                    }
                    id="postcode"
                    placeholder="postcode"
                    value={values.postcode}
                    onChange= {handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="" label="Select a Postal Code">Select a Postal Code{" "}</option>
                    {postals.map((postal) => (<option value={postal} label={postal}>{postal}</option>))}
                  </select>
                  <label htmlFor="last-name light-300">postcode</label>
                  {errors.postcode && touched.postcode && (
                    <em className="text-error">{errors.postcode}</em>
                  )}
                </div>
              </div>
              {/* End Input postcode */}
              <div className="col-lg-4 mb-4">
                <div className="form-floating">
                  <input
                    type="text"
                    className={
                      errors.caseCount && touched.caseCount
                        ? "form-control form-control-lg-error light-300-error"
                        : "form-control form-control-lg light-300"
                    }
                    id="caseCount"
                    placeholder="Case Count"
                    value={values.caseCount}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="password light-300">Case Count</label>
                  {errors.caseCount && touched.caseCount && (
                    <em className="text-error">{errors.caseCount}</em>
                  )}
                </div>
              </div>
              {/* End Input caseCount */}
              <div className="col-md-12 col-12 m-auto text-end">
                <em className="text-error px-3">{errMsg}</em>
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="btn btn-secondary rounded-pill px-md-5 px-4 py-2 radius-0 text-light light-300"
                >
                  Update!
                </button>
              </div>
            </form>
          </div>
          {/* End Update Details Form */}
        </div>
      </section>
      {/* End Update Form */}
      <Footer />
    </>
  );
};

export default AdminUpdate;
