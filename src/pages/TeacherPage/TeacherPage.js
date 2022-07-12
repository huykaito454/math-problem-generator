import React from "react";
import { useForm } from "react-hook-form";

const TeacherPage = () => {
  const { handleSubmit, register } = useForm();
  const handleCreateQuestion = (values) => {
    console.log(values);
  };
  return (
    <div className="w-full page-container p-10 flex flex-col items-center">
      <div className="p-16 pt-24 bg-primary text-5xl w-full text-white rounded-[40px] font-semibold">
        <span>Create question</span>
      </div>
      <form
        className="content w-[50%] gap-y-6 flex flex-col items-start py-10 text-2xl"
        onSubmit={handleSubmit(handleCreateQuestion)}
      >
        <span>Select option genarate question you would like.</span>
        <div className="flex items-center justify-between w-full">
          <label htmlFor="">Select your type:</label>
          <select
            className="px-10 bg-[#CCCCCC] outline-none rounded-xl"
            {...register("type")}
          >
            <option value={1}>Multi choice</option>
            <option value={2}>Multi select</option>
          </select>
        </div>
        <div className="flex w-full justify-end">
          <button className="button">Create</button>
        </div>
      </form>
    </div>
  );
};

export default TeacherPage;
