import { all, fork } from "redux-saga/effects";
import { questionsSaga } from "./questions/saga";
import { topicSaga } from "./topic/saga";
export default function* rootSaga() {
  yield all([fork(questionsSaga), fork(topicSaga)]);
}
