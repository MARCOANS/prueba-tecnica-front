import { all } from "redux-saga/effects";


import * as department from "./watchers/department";

export default function* rootSaga() {
  yield all([department.departmentWatchSaga()]);
}
