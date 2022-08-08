import React, { useState } from "react";

// Header component
const Header = ({ text }) => {
  return (
    <div className="row pb-3">
      <div className="col text-center bg-dark text-white">
        <div className="h1">{text}</div>
      </div>
    </div>
  );
};

export default Header;
