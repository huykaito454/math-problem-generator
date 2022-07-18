import { call, put } from "redux-saga/effects";
import { setQuestions } from "./questionsSlice";
import requestGetQuestion from "./request";
export default function* handleGetQuestion({ payload }) {
  try {
    const res = yield call(requestGetQuestion, payload);
    yield put(setQuestions(res.data.data));
  } catch (error) {
    console.log(error);
  }
}
