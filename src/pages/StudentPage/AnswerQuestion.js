import React, { Fragment } from "react";

const AnswerQuestion = () => {
  return (
    <div className="flex flex-col relative z-1 items-center w-full page-container">
      <div className="w-[95%]">
      <button className="active:scale-90 cursor-pointer select-none transition-all border-2 go-back-button border-black rounded-full flex items-center gap-1 text-2xl relative my-8 h-12 w-fit overflow-hidden before:border-0 before:rounded-full before:bg-orange-700 before:h-12 before:w-12 before:absolute before:z-[-1]">
        <i class="fas fa-arrow-left flex items-center justify-center w-12 h-12 relative z-40"></i> <p className="pr-4">Take it later</p>
      </button>
      </div>
      <div className="rounded-xl select-none w-[95%] bg-teal-600 flex flex-col pl-4 text-white pt-12 h-52">
            <div className="text-sm">Home page/All topics/Topic name</div>
            <div className="text-4xl font-bold mt-2">Topic name</div>
      </div>
      <div className="rounded-xl select-none w-[90%] mx-8 flex flex-col pl-4 text-black pt-12 min-h-[200px] glass relative translate-y-[-55px]">
            <div className="text-xl">Question 1:</div>
            <div className="text-xl font-bold mt-2">What is your name</div>
      </div>
      <div className="answer-list flex w-[90%] justify-around">
        <div className="answer rounded-xl button translate-y-[-100px] h-20 flex items-center justify-center w-40 text-white bg-teal-400">A. Tín</div>
        <div className="answer rounded-xl button translate-y-[-100px] h-20 flex items-center justify-center w-40 text-white bg-teal-400">A. Tín</div>
        <div className="answer rounded-xl button translate-y-[-100px] h-20 flex items-center justify-center w-40 text-white bg-teal-400">A. Tín</div>
        <div className="answer rounded-xl button translate-y-[-100px] h-20 flex items-center justify-center w-40 text-white bg-teal-400">A. Tín</div>
      </div>
      <div className="w-[95%] flex justify-end">
        <button className="rounded-full button bg-slate-600 px-4 py-2 text-white">Next question</button>
      </div>
      <div className="w-full count-down fixed bg-green-300 h-3 bottom-0 max-w-[1440px] rounded-t-lg after:bg-white after:right-0 after:h-full after:absolute"></div>
    </div>
  );
};

export default AnswerQuestion;
