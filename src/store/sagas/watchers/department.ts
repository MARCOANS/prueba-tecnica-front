import { takeLatest } from "redux-saga/effects";

import * as workers from "../workers/department";
import { departmentActionTypes } from "../../action-types/department";

export function* departmentWatchSaga() {
  yield takeLatest(departmentActionTypes.CREATE_DEPARTMENT_REQUESTED, workers.create);
  yield takeLatest(departmentActionTypes.GET_DEPARTMENT_REQUESTED, workers.show);
  yield takeLatest(departmentActionTypes.LIST_DEPARTMENT_REQUESTED, workers.list);
  yield takeLatest(departmentActionTypes.DELETE_DEPARTMENT_REQUESTED, workers.destroy);
  yield takeLatest(departmentActionTypes.UPDATE_DEPARTMENT_REQUESTED, workers.update);
  yield takeLatest(departmentActionTypes.LIST_DEPARTMENT_FILTERS_REQUESTED, workers.filters);

}
