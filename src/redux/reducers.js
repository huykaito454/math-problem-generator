import { combineReducers } from "@reduxjs/toolkit";
import questionsSlice from "./questions/questionsSlice";
import topicsSlice from "./topic/topicsSlice";

export const reducer = combineReducers({
  questions: questionsSlice,
  topics: topicsSlice,
});
