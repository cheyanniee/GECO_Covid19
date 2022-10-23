import React from "react";

const SearchUsers = () => {
  return (
    <>
      <form className="contact-form row">
        <div className="col-lg-4 mb-4">
          <div className="form-floating">
            <input
              type="text"
              className="form-control form-control-lg light-300"
            />
            <label htmlFor="firstName light-300">
              Patient's NRIC/FIN/Passport
            </label>
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchUsers;
