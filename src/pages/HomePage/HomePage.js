import React from "react";
import imageHome from "../../assets/images/home.png";
const HomePage = () => {
  return (
    <div className="w-full page-container flex items-center p-10 justify-between">
      <div className="w-[45%] flex flex-col gap-y-4">
        <div className="flex flex-col text-6xl">
          <span>Best Kids Academic</span>
          <span>Online Learning</span>
          <span>Platfrom</span>
        </div>
        <span className=" text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
        <div className="flex gap-x-2 items-center">
          <div className="button rounded-lg border-2 border-primary">
            Get Started
          </div>
          <div className="button rounded-lg bg-white text-primary border-2 border-primary">
            Learn More
          </div>
        </div>
      </div>
      <div className="w-[55%]">
        <img src={imageHome} alt="" />
      </div>
    </div>
  );
};

export default HomePage;
