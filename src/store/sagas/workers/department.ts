import { call, put } from "redux-saga/effects";

import {
  CREATE_DEPARTMENT_SUCCESS_ACTION,
  CREATE_DEPARTMENT_ERROR_ACTION,
  LIST_DEPARTMENT_SUCCESS_ACTION,
  DELETE_DEPARTMENT_ERROR_ACTION,
  DELETE_DEPARTMENT_SUCCESS_ACTION,
  GET_DEPARTMENT_SUCCESS_ACTION,
  GET_DEPARTMENT_ERROR_ACTION,
  UPDATE_DEPARTMENT_ERROR_ACTION,
  UPDATE_DEPARTMENT_SUCCESS_ACTION,
  LIST_DEPARTMENT_ERROR_ACTION,
  LIST_DEPARTMENT_FILTERS_SUCCESS_ACTION,
  LIST_DEPARTMENT_FILTERS_ERROR_ACTION,
} from "../../actions/department";

import * as Api from "services/department";

import { getCustomError } from "services/apiClient";
import { SHOW_ALERT2_ACTION } from "../../actions/sweetAlert";
import { SweetAlertType } from "types/sweet-alert";

export function* list(action: any): any {
  const params = action.payload;

  try {
    const { data } = yield call(Api.list, params);
    yield put(LIST_DEPARTMENT_SUCCESS_ACTION(data));
  } catch (error: any) {
    const errorMessage = getCustomError(error);
    yield put(LIST_DEPARTMENT_ERROR_ACTION(errorMessage));
    yield put(
      SHOW_ALERT2_ACTION({
        text: errorMessage.message,
        icon: SweetAlertType.Error,
        title: "Error !",
      })
    );
  }
}

export function* create(action: any): any {
  try {
    const payload = action.payload;

    const resp = yield call(Api.create, payload);
    yield put(CREATE_DEPARTMENT_SUCCESS_ACTION(resp.data));
    yield put(SHOW_ALERT2_ACTION({ text: resp.data.message }));
    yield* list({});
  } catch (error: any) {
    const errorMessage = getCustomError(error);
    yield put(CREATE_DEPARTMENT_ERROR_ACTION(errorMessage));
    yield put(
      SHOW_ALERT2_ACTION({
        text: errorMessage.message,
        icon: SweetAlertType.Error,
        title: "Error !",
      })
    );
  }
}

export function* show(action: any): any {
  const id = action.payload;
  try {
    const resp: any = yield call(Api.show, id);

    yield put(GET_DEPARTMENT_SUCCESS_ACTION(resp.data));
  } catch (error) {
    const errorMessage = getCustomError(error);
    yield put(GET_DEPARTMENT_ERROR_ACTION(errorMessage));
    yield put(
      SHOW_ALERT2_ACTION({
        text: errorMessage.message,
        icon: SweetAlertType.Error,
        title: "Error !",
      })
    );
  }
}

export function* destroy(action: any): any {
  const id = action.payload;
  try {
    const resp: any = yield call(Api.destroy, id);

    yield put(DELETE_DEPARTMENT_SUCCESS_ACTION(resp.data));
    yield put(SHOW_ALERT2_ACTION({ text: resp.data.message }));
    yield list({});
  } catch (error) {
    const errorMessage = getCustomError(error);
    yield put(DELETE_DEPARTMENT_ERROR_ACTION(errorMessage));
    yield put(
      SHOW_ALERT2_ACTION({
        text: errorMessage.message,
        icon: SweetAlertType.Error,
        title: "Error !",
      })
    );
  }
}

export function* update(action: any): any {
  const { id, data } = action.payload;
  try {
    const resp: any = yield call(Api.update, id, data);
    yield put(UPDATE_DEPARTMENT_SUCCESS_ACTION(resp.data));
    yield put(SHOW_ALERT2_ACTION({ text: resp.data.message }));
    yield* list({});
  } catch (error) {
    const errorMessage = getCustomError(error);
    yield put(UPDATE_DEPARTMENT_ERROR_ACTION(errorMessage));
    yield put(
      SHOW_ALERT2_ACTION({
        text: errorMessage.message,
        icon: SweetAlertType.Error,
        title: "Error !",
      })
    );
  }
}

export function* filters(action: any): any {
  try {
    const { data } = yield call(Api.filters);
    yield put(LIST_DEPARTMENT_FILTERS_SUCCESS_ACTION(data));
  } catch (error: any) {
    const errorMessage = getCustomError(error);
    yield put(LIST_DEPARTMENT_FILTERS_ERROR_ACTION(errorMessage));
    yield put(
      SHOW_ALERT2_ACTION({
        text: errorMessage.message,
        icon: SweetAlertType.Error,
        title: "Error !",
      })
    );
  }
}
