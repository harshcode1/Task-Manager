import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-black">
      <div className="container-fluid d-flex justify-content-between">
        <span className="navbar-brand mx-auto">TASK -- MANAGER</span>
        <div>
          <button type="button" className="btn btn-info me-2">LogIN</button>
          <button type="button" className="btn btn-info">LogOUT</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
