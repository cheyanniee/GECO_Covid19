import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios, { config, PATIENTS_SEARCH_ENDPOINT } from "../api/axios";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ROLES, VACCINE_DOSE } from "../helper/Constant";
import useAuth from "../hooks/useAuth";

const DoctorSearch = () => {
  const { auth } = useAuth();
  const [data, setData] = useState([]);
  const [apiSearch, setApiSearch] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          PATIENTS_SEARCH_ENDPOINT,
          config({ token: auth.token })
        );
        setData(
          response?.data?.filter((patient) => patient.role === ROLES.User)
        );
        setApiSearch(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [auth.token]);

  const handleFilter = (e) => {
    const inputText = e.target.value;
    const filterResult = apiSearch.filter((item) => {
      return item.officialId
        ? item.officialId.toLowerCase().includes(inputText.toLowerCase()) &&
            item.role.includes(ROLES.User)
        : false;
    });
    filterResult.length > 0
      ? setData(filterResult)
      : setData([{ officialId: "No result for " + inputText }]);
  };

  return (
    <>
      <Header />
      <section className="container-lg py-5">
        <div className="row">
          <div className="worksingle-content col-lg-10 m-auto text-left justify-content-center">
            <h2 className="worksingle-heading h3 pb-5 light-300 typo-space-line">
              Patients Vaccination Update
            </h2>
          </div>
        </div>
        <div className="row mb-4">
          <div className="worksingle-content col-lg-10 m-auto text-left justify-content-center">
            <form className="contact-form row">
              <div className="col-lg-4">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control form-control-lg light-300"
                    id="officialId"
                    onChange={handleFilter}
                  />
                  <label htmlFor="officialId light-300">
                    Patient's NRIC/FIN/Passport
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row align-items-start ">
          <div className=" col-lg-10 m-auto text-left justify-content-center">
            <div className="row align-items-start text-primary fs-4 mb-3">
              <div className="col-2">Official ID</div>
              <div className="col-2">Full Name</div>
              <div className="col-3">Vaccination Date</div>
              <div className="col-2">Doses</div>
              <div className="col-2">Action</div>
            </div>
            {data.map((patient) => {
              const { id, firstName, lastName, officialId } = patient;
              return (
                <div key={id} className="row align-items-start mb-2">
                  <div className="col-2">{officialId}</div>
                  <div className="col-2">
                    {firstName} {lastName}
                  </div>
                  <div className="col-3">
                    {firstName && (
                      <input
                        type="date"
                        className="form-control light-300"
                        id="vacDate"
                      />
                    )}
                  </div>
                  <div className="col-2">
                    {firstName && (
                      <select className="form-select">
                        <option>Select Dose</option>
                        {VACCINE_DOSE.map((dose) => (
                          <option key={dose}>{dose}</option>
                        ))}
                      </select>
                    )}
                  </div>
                  <div className="col-2">
                    {firstName && (
                      <Link>
                        <i className="bx bx-pencil bx-sm" />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Start of Pagination */}
        <div className="row">
          <div
            className="btn-toolbar justify-content-center pb-4"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <div
              className="btn-group me-2"
              role="group"
              aria-label="First group"
            >
              <button type="button" className="btn btn-secondary text-white">
                Previous
              </button>
            </div>
            <div
              className="btn-group me-2"
              role="group"
              aria-label="Second group"
            >
              <button type="button" className="btn btn-light">
                1
              </button>
            </div>
            <div
              className="btn-group me-2"
              role="group"
              aria-label="Second group"
            >
              <button type="button" className="btn btn-secondary text-white">
                2
              </button>
            </div>
            <div className="btn-group" role="group" aria-label="Third group">
              <button type="button" className="btn btn-secondary text-white">
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DoctorSearch;
