import {
  deleteRequest,
  getRequest,
  postRequest,
  putRequest,
} from "services/apiClient";

import {
  CREATE_DEPARTMENT_URL,
  DELETE_DEPARTMENT_URL,
  LIST_DEPARTMENT_URL,
  SHOW_DEPARTMENT_URL,
  LIST_DEPARTMENT_FILTERS_URL
} from "constants/request/department";

export const list = (data: any) => getRequest(LIST_DEPARTMENT_URL, data);

export const create = (data: any) =>postRequest(CREATE_DEPARTMENT_URL, data);

export const show = (id: number) =>getRequest(SHOW_DEPARTMENT_URL.replace("{id}", id.toString()));

export const update = (id: number, data: object) =>putRequest(SHOW_DEPARTMENT_URL.replace("{id}", id.toString()), data);

export const destroy = (id: number) =>deleteRequest(DELETE_DEPARTMENT_URL.replace("{id}", id.toString()));

export const filters= () => getRequest( LIST_DEPARTMENT_FILTERS_URL);
