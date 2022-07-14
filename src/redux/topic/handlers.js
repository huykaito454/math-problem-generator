import { call, put } from "redux-saga/effects";
import { setTopics } from "./topicsSlice";
import requestGetTopics from "./request";
export default function* handleGetTopics({ payload }) {
  try {
    const res = yield call(requestGetTopics, payload);
    console.log(res.data.data);
    yield put(setTopics(res.data.data));
  } catch (error) {
    console.log(error);
  }
}
