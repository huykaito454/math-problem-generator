import { combineReducers } from "@reduxjs/toolkit";
import questionsSlice from "./questions/questionsSlice";

export const reducer = combineReducers({
  questions: questionsSlice,
});
