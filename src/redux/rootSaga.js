import { all, fork } from "redux-saga/effects";
import { questionsSaga } from "./questions/saga";
export default function* rootSaga() {
  yield all([fork(questionsSaga)]);
}
