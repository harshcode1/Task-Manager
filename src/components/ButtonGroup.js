import React from "react";

const ButtonGroup = () => {
  return (
    <div className="d-grid gap-2 col-6 mx-auto mt-5"> 
      <button className="btn btn-outline-warning btn-lg" type="button">Add a Task</button>
      <button className="btn btn-outline-warning btn-lg mt-2" type="button">Show COMPLETED TASKS</button>
      <div className="dropdown mt-2">
        <button className="btn btn-outline-warning btn-lg dropdown-toggle w-100" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
          Sort NOTES BY
        </button>
        <ul className="dropdown-menu w-100" aria-labelledby="dropdownMenuButton">
          <li><a className="dropdown-item" to ="/">Personal</a></li>
          <li><a className="dropdown-item" to ="/">Professional</a></li>
          <li><a className="dropdown-item" to ="/">Option 3</a></li>
        </ul>
      </div>
    </div>
  );
};

export default ButtonGroup;
