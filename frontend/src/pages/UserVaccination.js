import React, { useEffect, useState } from "react";
import axios, { config, USERCOVID_RESULT_ENDPOINT } from "../api/axios";
import Footer from "../components/Footer";
import Header from "../components/Header";
import useAuth from "../hooks/useAuth";
import moment from "moment";

const UserVaccination = () => {
  const { auth } = useAuth();
  const [resultSet, setResultSet] = useState([]);

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const result = await axios.get(
          USERCOVID_RESULT_ENDPOINT,
          config({ token: auth.token })
        );
        console.log(result.data);
        result?.data?.vaccList.sort((a, b) => {
          return new Date(b.date) - new Date(a.date);
        });
        setResultSet(result.data.vaccList);
      } catch (error) {
        console.log(error);
      }
    };
    fetchResult();
  }, [auth.token]);

  return (
    <>
      <Header />
      <section className="container-lg">
        <div className="row pt-5">
          <div className="worksingle-content col-lg-10 m-auto text-left justify-content-center">
            <h2 className="worksingle-heading h3 pb-3 light-300 typo-space-line">
              Your Vaccination status
            </h2>
            <p className="worksingle-footer py-3 text-muted light-300">
              NRIC/FIN/PASSPORT: {auth.officialId} <br />
              Full Name: {auth.firstName} {auth.lastName}.
            </p>
          </div>
        </div>
        <div className="row align-items-start ">
          <div className=" col-lg-10 m-auto text-left justify-content-center">
            {resultSet.length > 0 ? (
              <>
                <div className="row align-items-start text-primary fs-5 mb-3">
                  <div className="col-1 px-3">Date</div>
                  <div className="col-3 px-5">Clinic Name</div>
                  <div className="col-2 px-3">Phone</div>
                  <div className="col-3 px-3">Address</div>
                  <div className="col-1 px-5">Status</div>
                </div>
                {resultSet.map((result) => {
                  return (
                    <div
                      key={result.id}
                      className="row align-items-start text mb-3"
                    >
                      <div className="col-1 px-3">
                        {moment(result.date).format("DD-MM-YYYY")}
                      </div>
                      <div className="col-3 px-5">
                        {result.clinicModel.clinicName}
                      </div>
                      <div className="col-2 px-3">
                        {result.clinicModel.phone}
                      </div>
                      <div className="col-3 px-3">
                        {result.clinicModel.address}
                      </div>
                      <div className="col-1 px-5 text-success">
                        {result.result}
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <div className="row align-items-start text-primary fs-5 mb-3">
                <div className="col-8 px-3">You are not Vaccinated!</div>
              </div>
            )}
          </div>
        </div>
        <div className="row align-items-start ">
          <div className=" col-lg-8 m-auto text-left justify-content-center">
            <div className="row align-items-start text-primary mb-5">
              <div className="col-2"></div>
              <div className="col-3"></div>
              <div className="col-3"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default UserVaccination;
