import { takeLatest } from "redux-saga/effects";
import handleGetTopics from "./handlers";
import { getTopics } from "./topicsSlice";

export function* topicSaga() {
  yield takeLatest(getTopics.type, handleGetTopics);
}
