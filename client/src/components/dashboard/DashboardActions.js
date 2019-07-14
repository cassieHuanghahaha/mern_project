import React from "react";
import { Link } from "react-router-dom";

const DashboardActions = () => {
  return (
    <div class='dash-buttons'>
      <ul>
        <li>
          <Link to='/edit-profile' class='btn btn-primary'>
            <i class='fas fa-user-circle text-primary' /> Edit Profile
          </Link>
          {/* </li>
        <li> */}
          <Link to='/add-experience' class='btn btn-primary'>
            <i class='fab fa-black-tie text-primary' /> Add Experience
          </Link>
          {/* </li>
        <li> */}
          <Link to='/add-education' class='btn btn-primary'>
            <i class='fas fa-graduation-cap text-primary' /> Add Education
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DashboardActions;
