import React from "react";
import logoImg from "../../assets/images/logo.png";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="flex items-center page-container justify-between w-full py-4 bg-white ">
      <div className="w-[230px] ">
        <img
          src={logoImg}
          alt=""
          className="w-16 cursor-pointer select-none"
          onClick={() => {
            navigate("");
          }}
        />
      </div>
      <div className=" flex items-center justify-center gap-x-10 text-xl text-gray-700">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "text-primary cursor-pointer" : "cursor-pointer"
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/teacher"}
          className={({ isActive }) =>
            isActive ? "text-primary cursor-pointer" : "cursor-pointer"
          }
        >
          Teacher
        </NavLink>
        <NavLink
          to={"/student"}
          className={({ isActive }) =>
            isActive ? "text-primary cursor-pointer" : "cursor-pointer"
          }
        >
          Courses
        </NavLink>
        <NavLink
          to={"/topic"}
          className={({ isActive }) =>
            isActive ? "text-primary cursor-pointer" : "cursor-pointer"
          }
        >
          Instructor
        </NavLink>
        <NavLink
          to={"/topic"}
          className={({ isActive }) =>
            isActive ? "text-primary cursor-pointer" : "cursor-pointer"
          }
        >
          Contact
        </NavLink>
      </div>
      <div className="w-[230px] flex items-center justify-end gap-x-2 text-lg">
        <div className="button py-1 px-6 bg-white text-primary border-2 border-primary">
          Sign in
        </div>
        <div className="button py-1 px-6 bg-primary border-2 border-primary">
          Sign up
        </div>
      </div>
    </header>
  );
};

export default Header;
