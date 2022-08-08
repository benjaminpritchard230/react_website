// sfc to create component with snippets

import Header from "./header";
import { useState, useEffect } from "react";
import keys from "./images/keys.jpg";

const MortgageCalculator = () => {
  let [principal, setPrincipal] = useState(0);
  let [interest, setInterest] = useState(0);
  let [term, setTerm] = useState(0);
  let [monthlyPayment, setMonthlyPayment] = useState(0);

  // calculate monthly mortgage payment
  const calculateMonthlyPayment = (principal, interest, term) => {
    const monthlyInterest = interest / 12 / 100;
    const monthlyPayment =
      principal *
      (monthlyInterest / (1 - Math.pow(1 / (1 + monthlyInterest), term * 12)));
    return monthlyPayment;
  };

  // calculate mortgage payment each time the inputs change
  useEffect(() => {
    monthlyPayment = Math.round(
      calculateMonthlyPayment(principal, interest, term)
    );

    setMonthlyPayment(monthlyPayment);
  }, [principal, interest, term]);

  return (
    <div className="section">
      <Header text="Mortgage Calculator" />
      <div className="container">
        <div className="row text-center">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  💷
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Principal amount"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(e) => setPrincipal(e.target.value)}
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  ％
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Interest rate"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(e) => setInterest(e.target.value)}
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  🕘
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Term in years"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(e) => setTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="col-6 d-none d-lg-block">
            <img src={keys} alt="" className="img-fluid w-75 rounded shadow" />
          </div>
        </div>
        <div className="row text-center">
          <div className="col-12 pt-3">
            <h3>£{monthlyPayment}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;
