import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios, {
  CLINIC_GET_ID_ENDPOINT,
  config,
  DOCTOR_VISIT_ENDPOINT,
  PATIENTS_SEARCH_ENDPOINT,
} from "../api/axios";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { COVID_TEST_RESULTS, ROLES } from "../helper/Constant";
import useAuth from "../hooks/useAuth";
import moment from "moment";

const DoctorTest = () => {
  const { auth } = useAuth();
  const [data, setData] = useState([]);
  const [apiSearch, setApiSearch] = useState([]);
  const [clinic, setClinic] = useState(0);
  const [testDate, setTestDate] = useState();
  const [testResult, setTestResult] = useState();
  const [message, setMessage] = useState();
  const [errMsg, setErrMsg] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          PATIENTS_SEARCH_ENDPOINT,
          config({ token: auth.token })
        );
        console.log("data", response?.data);
        setData(
          response?.data?.filter((patient) => patient.role === ROLES.User)
        );
        setApiSearch(response?.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchClinicId = async () => {
      try {
        const response = await axios.get(
          CLINIC_GET_ID_ENDPOINT,
          config({ token: auth.token })
        );
        console.log(response?.data?.clinicModel);
        setClinic(response?.data?.clinicModel);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    fetchClinicId();
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

  const handleUpdate = async (id) => {
    const result = testResult;
    let date = testDate;

    if (!date || !result) return;
    date = moment(date).format("DD-MM-YYYY");
    try {
      const params = {
        peopleId: id,
        clinicId: clinic?.id,
        date,
        result,
        operation: "test",
      };
      const response = await axios.post(
        DOCTOR_VISIT_ENDPOINT,
        params,
        config({ token: auth?.token })
      );
      console.log(response.data.message);
      setMessage("Update Success!");
    } catch (error) {
      console.log(error);
      setErrMsg(error?.data);
    }
  };

  return (
    <>
      <Header />
      <section className="container-lg py-5">
        <div className="row">
          <div className="worksingle-content col-lg-10 m-auto text-left justify-content-center">
            <h2 className="worksingle-heading h3 pb-5 light-300 typo-space-line">
              Patients Covid-19 Test Update
            </h2>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-lg-10 m-auto text-left justify-content-center">
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
                {message && <em className="text-success px-2">{message}</em>}
                {errMsg && <em className="text-danger px-2">{errMsg}</em>}
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-start ">
          <div className=" col-lg-10 m-auto text-left justify-content-center">
            <div className="row align-items-start text-primary fs-4 mb-3">
              <div className="col-2">Official ID</div>
              <div className="col-2">Full Name</div>
              <div className="col-3">COVID-19 Test Date</div>
              <div className="col-2">Result</div>
              <div className="col-2">Action</div>
            </div>
            {data.map((patient) => {
              const { id, firstName, lastName, officialId } = patient;
              return (
                <form key={id}>
                  <div className="row align-items-start mb-2">
                    <div className="col-2">{officialId}</div>
                    <div className="col-2">
                      {firstName} {lastName}
                    </div>
                    <div className="col-3">
                      {firstName && (
                        <input
                          type="date"
                          onChange={(e) => setTestDate(e.target.value)}
                          className="form-control light-300"
                          id="testDate"
                        />
                      )}
                    </div>
                    <div className="col-2">
                      {firstName && (
                        <select
                          className="form-select"
                          onChange={(e) => setTestResult(e.target.value)}
                        >
                          <option>Select Result</option>
                          {COVID_TEST_RESULTS.map((result) => (
                            <option key={result} value={result}>
                              {result}
                            </option>
                          ))}
                        </select>
                      )}
                    </div>
                    <div className="col-2">
                      {firstName && (
                        <Link>
                          <i
                            className="bx bx-pencil bx-sm"
                            onClick={() => handleUpdate(id)}
                          />
                        </Link>
                      )}
                    </div>
                  </div>
                </form>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DoctorTest;
