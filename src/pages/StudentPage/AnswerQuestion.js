import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { API } from "../../config";
const AnswerQuestion = () => {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const getQuestion = async () => {
    const res = await axios.get(API.getAPI("getQuestions"));
    const dataHandle = handleOption(res.data.data);
    setQuestions(dataHandle);
    console.log(dataHandle);
  };
  const handleOption = (data) => {
    data.forEach((element) => {
      for (const [key, value] of Object.entries(element)) {
        if (key === "option") {
          element.option = value.split(",");
        }
      }
      return element;
    });
    return data;
  };
  const handleAnswer = (answer, e) => {
    const answers = document.querySelectorAll(".answer");
    answers.forEach((item) => {
      item.classList.remove("active");
    });
    console.log(answer);
    e.classList.add("active");
  };
  useEffect(() => {
    getQuestion();
  }, []);
  return (
    <div className="flex flex-col item-start justify-between page-container w-full">
      <div className="w-full">
        <button className="active:scale-90 cursor-pointer select-none transition-all border-2 go-back-button border-black rounded-full flex items-center gap-1 text-2xl relative my-8 h-12 w-fit overflow-hidden before:border-0 before:rounded-full before:bg-orange-700 before:h-12 before:w-12 before:absolute before:z-[-1]">
          <i className="fas fa-arrow-left flex items-center justify-center w-12 h-12 relative z-40"></i>{" "}
          <p className="pr-4">Take it later</p>
        </button>
      </div>
      <div className="flex item-start justify-between page-container w-full">
        <div className="flex flex-col item-start justify-between page-container w-[75%]">
          {questions.length > 0 && (
            <div className="flex flex-col relative z-1 items-center w-full ">
              <div className="rounded-xl select-none w-full bg-teal-600 flex flex-col pl-4 text-white pt-12 h-52">
                <div className="text-sm">Home page/All topics/Topic name</div>
                <div className="text-4xl font-bold mt-2">Topic name</div>
              </div>
              <div className="rounded-xl select-none w-[90%] mx-8 flex flex-col pl-4 text-black pt-12 min-h-[200px] glass relative translate-y-[-55px]">
                <div className="text-xl">Question {index + 1}:</div>
                <div className="text-xl font-bold mt-2">
                  {questions[index]?.content}
                </div>
              </div>
              <div className="answer-list flex w-[90%] justify-around">
                {questions[index]?.option.length > 0 &&
                  questions[index]?.option.map((item, index) => (
                    <div
                      key={index}
                      className="answer rounded-xl button translate-y-[-100px] h-20 flex items-center justify-center w-40 text-white bg-teal-400"
                      onClick={(e) => {
                        handleAnswer(item, e.target);
                      }}
                    >
                      {item}
                    </div>
                  ))}
              </div>
              <div className="w-full flex justify-end">
                <button
                  className="rounded-xl button bg-slate-600 px-4 py-2 text-white"
                  onClick={() => {
                    if (index < questions.length - 1) setIndex(index + 1);
                    else setIndex(1);
                  }}
                >
                  Next question
                </button>
              </div>
              <div className="count-down fixed bg-green-300 h-3 bottom-0 w-full rounded-t-lg max-w-[1440px] after:bg-white after:right-0 after:h-full after:absolute"></div>
            </div>
          )}
        </div>
        <div className="w-[22%] bg-red-400 shadow-lg rounded-xl">asdadasds</div>
      </div>
    </div>
  );
};

export default AnswerQuestion;
