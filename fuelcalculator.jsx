import React, { useState } from "react";
import petrol from "./images/petrol.jpg";
import Header from "./header";

const Fuelcalculator = ({
  // get hooks from app.js
  vehicleMpg,
  setVehicleMpg,
  fuelCost,
  setFuelCost,
  distance,
  setDistance,
}) => {
  console.log(vehicleMpg);
  console.log(fuelCost);
  console.log(distance);

  const fuelDisplay = "Fuel display";
  // calculate journey cost
  let journeyCost = (
    ((distance / (vehicleMpg * 0.22)) * fuelCost) /
    100
  ).toFixed(2);

  return (
    <section className="text-center text-sm-start">
      <Header text="How much will your journey cost?" />
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 align-items-center justify-content-between">
            <div className="input-group input-group-sm mb-3">
              <span className="input-group-text">Vehicle MPG</span>
              <input
                type="number"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                onChange={(e) => setVehicleMpg(e.target.value)}
              />
            </div>
            <div className="input-group input-group-sm mb-3">
              <span className="input-group-text">Journey distance</span>
              <input
                type="number"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                onChange={(e) => setDistance(e.target.value)}
              />
            </div>
            <div className="input-group input-group-sm mb-3">
              <span className="input-group-text">Fuel price in P</span>
              <input
                type="number"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                onChange={(e) => setFuelCost(e.target.value)}
              />
            </div>
          </div>
          <div className="col-6 d-none d-lg-block">
            <img
              className="img-fluid w-100 rounded shadow"
              src={petrol}
              alt=""
            />
          </div>
        </div>
        <div className="row text-center">
          <div className="col-12 pt-5">
            <h3>The fuel will cost £{journeyCost}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fuelcalculator;
