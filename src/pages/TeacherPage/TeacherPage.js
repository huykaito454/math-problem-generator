import React from "react";
import { useForm } from "react-hook-form";

const TeacherPage = () => {
  const { handleSubmit, register } = useForm();
  const topic = ["OA", "NBT", "MD", "G"];
  const handleCreateQuestion = (values) => {
    console.log(values);
  };
  return (
    <div className="w-full page-container p-10 flex flex-col items-center">
      <div className="p-16 pt-24 bg-primary text-5xl w-full text-white rounded-[40px] font-semibold">
        <span>Create question</span>
      </div>
      <form
        className="content w-full gap-y-6 flex flex-col items-start py-10 text-2xl select-none"
        onSubmit={handleSubmit(handleCreateQuestion)}
      >
        <span>Select option genarate question you would like.</span>
        <div className="flex items-center justify-between w-full bg-[#CCCCCC] py-4 px-6 rounded-xl">
          <span>Question 1</span>
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
            {topic.map((item, index) => (
              <option value={index + 1}>{item}</option>
            ))}
          </select>
          <select
            className="px-10 bg-[#CCCCCC] outline-none rounded-xl"
            {...register("topic")}
          >
            <option value={""}>Topic</option>
            {new Array(5).fill(0).map((item, index) => (
              <option value={index + 1}>{index + 1}</option>
            ))}
          </select>
          <select
            className="px-10 bg-[#CCCCCC] outline-none rounded-xl"
            {...register("level")}
          >
            <option value={""}>Level</option>
            {new Array(5).fill(0).map((item, index) => (
              <option value={index + 1}>{index + 1}</option>
            ))}
          </select>
        </div>
        <div className="flex w-full justify-end">
          <button className="button bg-green-400 rounded-xl">Add</button>
        </div>
        <div className="flex w-full justify-end">
          <button className="button rounded-xl">Create</button>
        </div>
      </form>
    </div>
  );
};

export default TeacherPage;
