import React from "react";

const ButtonGroup = () => {
  return (
    <div className="d-flex justify-content-center gap-2 mt-5"> 
      <button className="btn btn-outline-warning btn-lg" type="button">Add a Task</button>
      <button className="btn btn-outline-warning btn-lg" type="button">Show COMPLETED TASKS</button>
      <div className="dropdown">
        <button className="btn btn-outline-warning btn-lg dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
          Sort NOTES BY
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li><a className="dropdown-item" href="/">Personal</a></li>
          <li><a className="dropdown-item" href="/">Professional</a></li>
          <li><a className="dropdown-item" href="/">Option 3</a></li>
        </ul>
      </div>
    </div>
  );
};

export default ButtonGroup;
