import React from "react";
import logoImg from "../../assets/images/logo.png";
const Header = () => {
  return (
    <header className="flex items-center justify-between page-container py-6">
      <div className="w-[8%]">
        <img src={logoImg} alt="" className="w-16 cursor-pointer select-none" />
      </div>
      <div className="w-[70%] flex items-center justify-center gap-x-10 text-xl">
        <span className=" cursor-pointer">Home</span>
        <span className=" cursor-pointer">About</span>
        <span className=" cursor-pointer">Courses</span>
        <span className=" cursor-pointer">Instructor</span>
        <span className=" cursor-pointer">Contact</span>
      </div>

      <div className="w-[10%]">
        <div className="button">Login/Register</div>
      </div>
    </header>
  );
};

export default Header;
