import React, { useState } from "react";

// Footer component
const Footer = ({ text }) => {
  return (
    <div className="row pt-3">
      <div className="col text-center bg-dark text-white">
        <div className="h1">{text}</div>
      </div>
    </div>
  );
};

export default Footer;
