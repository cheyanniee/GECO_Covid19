import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MakeAppointment = () => {
  const [selectedDate, setSelectedDate] = useState();
  console.log(selectedDate);
  console.log(selectedDate?.toDateString());
  return (
    <>
      <Header />
      <section className="bg-light w-100">
        <div className="container">
          <div className="row d-flex align-items-start py-2">
            <h1>Make Appointment</h1>
          </div>
          <div className="row d-flex align-items-start py-5">
            <div className="col-lg-3 text-start">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="Pp"
                minDate={new Date()}
                maxDate={new Date("2022/11/23")}
                filterDate={(date) =>
                  date.getDay() !== 6 && date.getDay() !== 0
                }
                /* showTimeSelect
                timeIntervals={60} */
                /* monthsShown={2} */
                inline
              />
            </div>
            <div className="col-lg-3 text-start">
              <strong>Selected Date</strong>
              <p>{selectedDate?.toDateString()}</p>
              <strong>Available Time</strong>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MakeAppointment;
