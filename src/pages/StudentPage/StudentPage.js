import React from "react";
import { NavLink } from "react-router-dom";
const StudentPage = () => {
  return (
    <>
      <NavLink
        to={"/answer-question"}
        className="flex w-full items-center justify-center page-container"
      >
        <div className="button">Do assignment</div>
      </NavLink>
    </>
  );
};

export default StudentPage;
