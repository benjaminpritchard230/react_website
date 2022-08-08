import React, { useState } from "react";
import cake from "./images/cake.jpg";
import Header from "./header";

const Birthday = ({ birthDate, setBirthdate }) => {
  let today = new Date(); // get current date
  birthDate = new Date(birthDate); // convert birthdate to date
  let age = ((today - birthDate) / (1000 * 60 * 60 * 24 * 365.25)).toFixed(0); // calculate age

  return (
    <section className="text-center text-sm-start">
      <Header text="Calculate your age!" />
      <div className="container">
        <div className="row">
          <div className="col align-items-center justify-content-between">
            <div className="input-group input-group-sm mb-3">
              <span className="input-group-text">Birthdate</span>
              <input
                type="date"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                onChange={(e) => setBirthdate(e.target.value)}
              />
            </div>
            <h3>You are {age} years old!</h3>
          </div>
          <div className="col align-items-center justify-content-between">
            <img
              className="img-fluid w-75 d-none d-sm-block rounded shadow"
              src={cake}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Birthday;
