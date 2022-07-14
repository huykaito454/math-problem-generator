import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getQuestions } from "../../redux/questions/questionsSlice";
const StudentPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = () => {
    dispatch(
      getQuestions({
        questionType: 1,
        skill: 1,
      })
    );
    dispatch(
      getQuestions({
        questionType: 1,
        skill: 1,
      })
    );
    dispatch(
      getQuestions({
        questionType: 1,
        skill: 1,
      })
    );
    dispatch(
      getQuestions({
        questionType: 1,
        skill: 1,
      })
    );
    dispatch(
      getQuestions({
        questionType: 1,
        skill: 1,
      })
    );
    dispatch(
      getQuestions({
        questionType: 1,
        skill: 1,
      })
    );
    dispatch(
      getQuestions({
        questionType: 1,
        skill: 1,
      })
    );
    dispatch(
      getQuestions({
        questionType: 1,
        skill: 1,
      })
    );
    dispatch(
      getQuestions({
        questionType: 1,
        skill: 1,
      })
    );
    dispatch(
      getQuestions({
        questionType: 1,
        skill: 1,
      })
    );
    dispatch(
      getQuestions({
        questionType: 1,
        skill: 1,
      })
    );
    dispatch(
      getQuestions({
        questionType: 1,
        skill: 1,
      })
    );
    dispatch(
      getQuestions({
        questionType: 1,
        skill: 1,
      })
    );
    dispatch(
      getQuestions({
        questionType: 1,
        skill: 1,
      })
    );
    dispatch(
      getQuestions({
        questionType: 1,
        skill: 1,
      })
    );
    dispatch(
      getQuestions({
        questionType: 1,
        skill: 1,
      })
    );
    dispatch(
      getQuestions({
        questionType: 1,
        skill: 1,
      })
    );
    dispatch(
      getQuestions({
        questionType: 1,
        skill: 1,
      })
    );
    dispatch(
      getQuestions({
        questionType: 1,
        skill: 1,
      })
    );
  };
  return (
    <div className="flex gap-y-4 flex-col">
      <NavLink
        to={"/answer-question"}
        className="flex w-full items-center justify-center page-container"
      >
        <div className="button">Do assignment</div>
      </NavLink>
      <div className="flex w-full items-center justify-center page-container">
        <div
          className="button"
          onClick={() => {
            handleSubmit();
            navigate("/answer-question");
            window.location.reload(false);
          }}
        >
          Learn Skill 1
        </div>
      </div>
    </div>
  );
};

export default StudentPage;
