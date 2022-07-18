import React from "react";

const TeacherView = () => {
  return (
    <div className="w-full page-container py-16 flex flex-col gap-y-8">
      <div className="flex items-center justify-between">
        <span className=" text-secondary cursor-pointer">
          Exam Questions/ Create new question collection
        </span>
        <div className="button px-8 rounded-2xl">Save</div>
      </div>
      <div className="w-full rounded-2xl p-5 text-xl text-white font-semibold shadow-md bg-primary">
        Exam 1
      </div>
      <form className="w-full rounded-2xl ">
        <div className="w-full grid grid-cols-4 gap-5">
          <div className="flex flex-col gap-5 bg-tertiary p-5 rounded-2xl shadow-md">
            <span className="text-primary font-semibold text-lg">
              Question 1
            </span>
            <div className="flex flex-col">
              <div>
                <span className="text-primary font-semibold mr-2">Type:</span>
                <span className="text-secondary">Multiple question</span>
              </div>
              <div>
                <span className="text-primary font-semibold mr-2">Topic:</span>
                <span className="text-secondary">
                  Add and subtract mixed number
                </span>
              </div>
              <div>
                <span className="text-primary font-semibold mr-2">Skill:</span>
                <span className="text-secondary">Add mixed number</span>
              </div>
              <div>
                <span className="text-primary font-semibold mr-2">Grade:</span>
                <span className="text-secondary">4</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 bg-primary p-4 w-[50px] items-center justify-center button rounded-2xl shadow-sm">
            <i className="far fa-plus-square text-white text-xl"></i>
          </div>
        </div>
      </form>
      <div className="flex items-center justify-between p-5 text-gray-700 rounded-2xl bg-tertiary">
        <span className=" font-semibold text-secondary">Question settings</span>
        <span className="text-white button rounded-2xl">Delete</span>
      </div>
      <form className="w-full">
        <div className="grid grid-cols-3 gap-5">
          <div className="flex items-center justify-between py-2 px-4 bg-tertiary rounded-2xl">
            <div className="flex flex-col">
              <span className="text-lg text-secondary font-semibold">
                Max Numberators
              </span>
              <span className="text-sm">
                The max numberators of each equation
              </span>
            </div>
            <input
              type="text"
              className="w-10 h-10 rounded-xl text-center outline-none text-secondary border-2 border-primary"
            />
          </div>
          <div className="flex items-center justify-between py-2 px-4 bg-tertiary rounded-2xl">
            <div className="flex flex-col">
              <span className="text-lg text-secondary font-semibold">
                Max Numberators
              </span>
              <span className="text-sm">
                The max numberators of each equation
              </span>
            </div>
            <input
              type="text"
              className="w-10 h-10 rounded-xl text-center outline-none text-secondary border-2 border-primary"
            />
          </div>
          <div className="flex items-center justify-between py-2 px-4 bg-tertiary rounded-2xl">
            <div className="flex flex-col">
              <span className="text-lg text-secondary font-semibold">
                Max Numberators
              </span>
              <span className="text-sm">
                The max numberators of each equation
              </span>
            </div>
            <input
              type="text"
              className="w-10 h-10 rounded-xl text-center outline-none text-secondary border-2 border-primary"
            />
          </div>
          <div className="flex items-center justify-between py-2 px-4 bg-tertiary rounded-2xl">
            <div className="flex flex-col">
              <span className="text-lg text-secondary font-semibold">
                Max Numberators
              </span>
              <span className="text-sm">
                The max numberators of each equation
              </span>
            </div>
            <input
              type="text"
              className="w-10 h-10 rounded-xl text-center outline-none text-secondary border-2 border-primary"
            />
          </div>
          <div className="flex items-center justify-between py-2 px-4 bg-tertiary rounded-2xl">
            <div className="flex flex-col">
              <span className="text-lg text-secondary font-semibold">
                Max Numberators
              </span>
              <span className="text-sm">
                The max numberators of each equation
              </span>
            </div>
            <input
              type="text"
              className="w-10 h-10 rounded-xl text-center outline-none text-secondary border-2 border-primary"
            />
          </div>
          <div className="flex items-center justify-between py-2 px-4 bg-tertiary rounded-2xl">
            <div className="flex flex-col">
              <span className="text-lg text-secondary font-semibold">
                Max Numberators
              </span>
              <span className="text-sm">
                The max numberators of each equation
              </span>
            </div>
            <input
              type="text"
              className="w-10 h-10 rounded-xl text-center outline-none text-secondary border-2 border-primary"
            />
          </div>
        </div>
      </form>
      <div className="flex items-start justify-between">
        <div className="w-[49%] flex flex-col gap-y-5 p-5 bg-tertiary rounded-2xl">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className=" text-secondary font-semibold">Shuffle</span>
              <span className="text-sm">
                Shuffle answers’s position in the question
              </span>
            </div>
            <label
              htmlFor="default-toggle2"
              className="inline-flex relative items-center cursor-pointer"
            >
              <input
                type="checkbox"
                id="default-toggle2"
                className="sr-only peer"
              />
              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-secondary"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className=" text-secondary font-semibold">Shuffle</span>
              <span className="text-sm">
                Shuffle answers’s position in the question
              </span>
            </div>
            <label
              htmlFor="default-toggle3"
              className="inline-flex relative items-center cursor-pointer"
            >
              <input
                type="checkbox"
                id="default-toggle3"
                className="sr-only peer"
              />
              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-secondary"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className=" text-secondary font-semibold">Shuffle</span>
              <span className="text-sm">
                Shuffle answers’s position in the question
              </span>
            </div>
            <label
              htmlFor="default-toggle4"
              className="inline-flex relative items-center cursor-pointer"
            >
              <input
                type="checkbox"
                id="default-toggle4"
                className="sr-only peer"
              />
              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-secondary"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className=" text-secondary font-semibold">Shuffle</span>
              <span className="text-sm">
                Shuffle answers’s position in the question
              </span>
            </div>
            <label
              htmlFor="default-toggle"
              className="inline-flex relative items-center cursor-pointer"
            >
              <input
                type="checkbox"
                id="default-toggle"
                className="sr-only peer"
              />
              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-secondary"></div>
            </label>
          </div>
        </div>
        <div className="w-[49%] flex flex-col gap-y-5 p-5 bg-tertiary rounded-2xl">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className=" text-secondary font-semibold">
                Answer Control
              </span>
              <span className="text-sm">Control result of the question</span>
            </div>
            <div className="flex items-center justify-end text-white border-2 border-gray-200 rounded-lg overflow-hidden font-semibold">
              <span className="py-1 px-4 bg-primary rounded-lg cursor-pointer">
                None
              </span>
              <span className="py-1 px-4 text-primary rounded-lg cursor-pointer">
                Greater
              </span>
              <span className="py-1 px-4 text-primary rounded-lg cursor-pointer">
                Smaller
              </span>
              <span className="py-1 px-4 text-primary rounded-lg cursor-pointer">
                Equal
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherView;
