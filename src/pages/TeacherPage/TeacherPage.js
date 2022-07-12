import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const TeacherPage = () => {
  const { handleSubmit, register } = useForm();
  const [dataRequest, setDataRequest] = useState([]);
  const topic = ["OA", "NBT", "MD", "G"];
  const handleValidObject = (data) => {
    for (const [key, value] of Object.entries(data)) {
      if (value === "") {
        toast.error(`Please choose ${key}`, {
          pauseOnHover: false,
          delay: 0,
          position: toast.POSITION.TOP_RIGHT,
        });
        return false;
      }
    }
  };
  const handleCreateQuestion = (values) => {
    const data = {
      ...values,
      standard: `${values.grade}.${values.topic}.${values.level}`,
    };
    const check = handleValidObject(data);
    if (check !== false) setDataRequest([...dataRequest, data]);
  };
  return (
    <div className="w-full page-container p-10 flex flex-col items-center">
      <div className="p-16 pt-24 bg-primary text-5xl w-full text-white rounded-[40px] font-semibold">
        <span>Create questions</span>
      </div>
      <form
        className="content w-full gap-y-6 flex flex-col items-start py-10 text-2xl select-none"
        onSubmit={handleSubmit(handleCreateQuestion)}
      >
        <span>Select option generate question you would like.</span>
        <div className="flex items-center justify-between w-full bg-[#CCCCCC] py-4 px-6 rounded-xl">
          <span>Question </span>
          <select
            className="px-10 bg-[#CCCCCC] outline-none rounded-xl"
            {...register("type")}
          >
            <option value={""}>Type</option>
            <option value={1}>Multi choice</option>
            <option value={2}>Multi select</option>
          </select>
          <select
            className="px-10 bg-[#CCCCCC] outline-none rounded-xl"
            {...register("grade")}
          >
            <option value={""}>Grade</option>
            {new Array(5).fill(0).map((item, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
          <select
            className="px-10 bg-[#CCCCCC] outline-none rounded-xl"
            {...register("topic")}
          >
            <option value={""}>Topic</option>

            {topic.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
          <select
            className="px-10 bg-[#CCCCCC] outline-none rounded-xl"
            {...register("level")}
          >
            <option value={""}>Level</option>
            {new Array(5).fill(0).map((item, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
          <button className="button bg-green-400 rounded-xl">Add</button>
        </div>
        <span>Current questions</span>
        {dataRequest.length > 0 &&
          dataRequest
            .slice(0)
            .reverse()
            .map((item, index) => (
              <div
                className="flex items-center justify-between w-full bg-[#CCCCCC] py-4 px-6 rounded-xl"
                key={index}
              >
                <span>Question {dataRequest.length - index}</span>
                <span>{item.standard}</span>
              </div>
            ))}
        <div className="flex w-full justify-end">
          <div className="button rounded-xl">Create</div>
        </div>
      </form>
    </div>
  );
};

export default TeacherPage;
