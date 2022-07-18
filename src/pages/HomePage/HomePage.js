import React, { useEffect } from "react";
import imageHome from "../../assets/images/home2.png";
import imageRocket from "../../assets/images/rocket1h.png";
const HomePage = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const rocket = document.getElementById("rocket");
      if (window.scrollY > 500) {
        rocket.classList.add("rocket");
      }
      if (window.scrollY < 100) {
        rocket.classList.remove("rocket");
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <>
      <div className="w-full page-container">
        <div className="w-full flex items-center pb-20 pt-16 justify-center gap-x-4">
          <div className="w-[45%] flex flex-col gap-y-5 justify-end items-end">
            <h1 className=" text-6xl font-semibold text-gray-700 text-right">
              Inspiring Innovation And Discovery
            </h1>
            <span className=" text-gray-500 text-lg">
              We have more than 80 skills for you to master
            </span>
            <div className="button py-3 rounded-2xl items-start">
              Get Started
            </div>
          </div>
          <div className="w-[45%] ">
            <img
              src="https://img.freepik.com/free-vector/tiny-students-with-huge-sign-pi-flat-vector-illustration-boy-girl-studying-math-algebra-school-college-holding-ruler-using-laptop-geometric-figures-background-education-concept_74855-23227.jpg?t=st=1657874737~exp=1657875337~hmac=7a1f0f910403d02071eea3094e7ae8693f09877d088da7c4b2c57cdabf75dc1e&w=900"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="w-full page-container py-20 ">
        <div className="flex flex-col gap-y-6 items-center justify-center">
          <span className="text-4xl font-semibold mb-10 text-secondary flex items-center gap-x-2 justify-center ">
            <span>Our best </span>
            <div className="w-32 relative z-50" id="rocket">
              <img src={imageRocket} alt="" />
            </div>
            <span>teachers</span>
          </span>
          <div className=" flex item-center pt-10 justify-between w-[80%]">
            <div className="card p-10 w-[27%] bg-secondary rounded-3xl flex flex-col justify-center items-center text-white shadow-lg">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                <img
                  src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/292417007_5402730206456108_6934977698520348753_n.jpg?stp=cp1_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=0debeb&_nc_ohc=KdIlDBSwuDwAX9vzZcL&_nc_ht=scontent.fsgn3-1.fna&oh=00_AT-zFC_u5arfugyiU4Ihzu33uIVWJnyeioyTKVwr2nwtrg&oe=62D5A531"
                  alt=""
                  className="w-ful object-cover"
                />
              </div>
              <span className="text-4xl mb-2 font-semibold">Tisn Nguyen</span>
              <span className="card-border border-b-4 rounded-full border-white w-full mb-5 "></span>
              <div className="flex flex-col items-center justify-center text-2xl font-semibold ">
                <span>3yrs experience</span>
                <span>MAT</span>
                <span>300 classes</span>
              </div>
            </div>
            <div className="card p-10 w-[27%] bg-secondary rounded-3xl flex flex-col justify-center items-center text-white shadow-lg">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                <img
                  src="https://reviewsmoi.com/wp-content/uploads/2022/03/iu-3.jpg"
                  alt=""
                  className="w-ful object-cover"
                />
              </div>
              <span className="text-4xl mb-2 font-semibold">Tisn Nguyen</span>
              <span className="card-border border-b-4 rounded-full border-white w-full mb-5 "></span>
              <div className="flex flex-col items-center justify-center text-2xl font-semibold ">
                <span>3yrs experience</span>
                <span>MAT</span>
                <span>300 classes</span>
              </div>
            </div>
            <div className="card p-10 w-[27%] bg-secondary rounded-3xl flex flex-col justify-center items-center text-white shadow-lg">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                <img
                  src="https://i.pinimg.com/originals/c9/d7/f9/c9d7f9c85b54bf0dcb0b22033021ed74.jpg"
                  alt=""
                  className="w-ful object-cover"
                />
              </div>
              <span className="text-4xl mb-2 font-semibold">Tisn Nguyen</span>
              <span className="card-border border-b-4 rounded-full border-white w-full mb-5 "></span>
              <div className="flex flex-col items-center justify-center text-2xl font-semibold ">
                <span>3yrs experience</span>
                <span>MAT</span>
                <span>300 classes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
