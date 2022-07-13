import { takeLatest } from "redux-saga/effects";
import handleGetQuestion from "./handlers";
import { getQuestions } from "./questionsSlice";
export function* questionsSaga() {
  yield takeLatest(getQuestions.type, handleGetQuestion);
}
