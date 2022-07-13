import React from "react";
import logoImg from "../../assets/images/logo.png";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();
    return (
        <header className="flex items-center justify-between page-container w-full py-6">
            <div className="w-[8%]">
                <img
                    src={logoImg}
                    alt=""
                    className="w-16 cursor-pointer select-none"
                    onClick={() => {
                        navigate("");
                    }}
                />
            </div>
            <div className="w-[70%] flex items-center justify-center gap-x-10 text-xl">
                <NavLink to={"/"} className={({ isActive }) => (isActive ? "text-primary cursor-pointer" : "cursor-pointer")}>
                    Home
                </NavLink>
                <NavLink to={"/teacher"} className={({ isActive }) => (isActive ? "text-primary cursor-pointer" : "cursor-pointer")}>
                    Teacher
                </NavLink>
                <NavLink to={"/student"} className={({ isActive }) => (isActive ? "text-primary cursor-pointer" : "cursor-pointer")}>
                    Student
                </NavLink>
                <span className=" cursor-pointer">About</span>
                <span className=" cursor-pointer">Contact</span>
            </div>
            <div className="w-[10%]">
                <div className="button">Login/Register</div>
            </div>
        </header>
    );
};

export default Header;
