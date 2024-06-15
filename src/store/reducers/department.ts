import { createReducer } from "@reduxjs/toolkit";

import {
  CREATE_DEPARTMENT_REQUESTED_ACTION,
  CREATE_DEPARTMENT_SUCCESS_ACTION,
  CREATE_DEPARTMENT_ERROR_ACTION,
  LIST_DEPARTMENT_REQUESTED_ACTION,
  LIST_DEPARTMENT_SUCCESS_ACTION,
  LIST_DEPARTMENT_ERROR_ACTION,
  GET_DEPARTMENT_REQUESTED_ACTION,
  GET_DEPARTMENT_SUCCESS_ACTION,
  GET_DEPARTMENT_ERROR_ACTION,
  UPDATE_DEPARTMENT_REQUESTED_ACTION,
  UPDATE_DEPARTMENT_SUCCESS_ACTION,
  UPDATE_DEPARTMENT_ERROR_ACTION,
  DELETE_DEPARTMENT_REQUESTED_ACTION,
  DELETE_DEPARTMENT_SUCCESS_ACTION,
  DELETE_DEPARTMENT_ERROR_ACTION,
  LIST_UPDATE_PARAMS_ACTION,
  LIST_DEPARTMENT_FILTERS_REQUESTED_ACTION,
  LIST_DEPARTMENT_FILTERS_SUCCESS_ACTION,
  LIST_DEPARTMENT_FILTERS_ERROR_ACTION,
} from "../actions/department";

import {
  createInitialState,
  deleteInitialState,
  listInitialState,
  showInitialState,
  updateInitialState,
} from "constants/initialState";

import { State } from "types/state";

const filtersInitialState = {
  departments: [],
  parents: [],
  levels: [],
};

export interface DepartmentState extends State {
  filters: {
    departments: Array<string>;
    parents: Array<string>;
    levels: Array<string>;
  };
}

const initialState: DepartmentState = {
  filters: filtersInitialState,
  list: listInitialState,
  create: createInitialState,
  show: showInitialState,
  update: updateInitialState,
  delete: deleteInitialState,
};

const departmentReducer = createReducer(initialState, (builder) => {
  builder.addCase(LIST_UPDATE_PARAMS_ACTION, (state, action) => {
    state.list.params = { ...state.list.params, ...action.payload };
  });
  //listar DEPARTMENTS
  builder.addCase(LIST_DEPARTMENT_REQUESTED_ACTION, (state) => {
    state.list = { ...state.list, inProgress: true };
  });

  builder.addCase(LIST_DEPARTMENT_SUCCESS_ACTION, (state, action) => {
    const { data, ...pagination } = action.payload;
    state.list = { ...state.list, data, pagination, inProgress: false };
  });

  builder.addCase(LIST_DEPARTMENT_ERROR_ACTION, (state) => {
    state.list = { ...state.list, inProgress: false };
  });

  //crear DEPARTMENT

  builder.addCase(CREATE_DEPARTMENT_REQUESTED_ACTION, (state) => {
    state.create = { ...createInitialState, inProgress: true };
  });

  builder.addCase(CREATE_DEPARTMENT_SUCCESS_ACTION, (state, action) => {
    const { message } = action.payload;
    state.create = { ...createInitialState, message, success: true };
  });

  builder.addCase(CREATE_DEPARTMENT_ERROR_ACTION, (state, action) => {
    const { message } = action.payload;
    state.create = { ...createInitialState, message, success: false };
  });

  //Obtener DEPARTMENT

  builder.addCase(GET_DEPARTMENT_REQUESTED_ACTION, (state) => {
    state.show = { ...showInitialState, inProgress: true };
  });

  builder.addCase(GET_DEPARTMENT_SUCCESS_ACTION, (state, action) => {
    state.show = { ...showInitialState, record: action.payload, success: true };
  });

  builder.addCase(GET_DEPARTMENT_ERROR_ACTION, (state, action) => {
    state.show = { ...showInitialState, error: true, message: action.payload };
  });

  //Actualizar DEPARTMENT

  builder.addCase(UPDATE_DEPARTMENT_REQUESTED_ACTION, (state) => {
    state.update = { ...updateInitialState, inProgress: true };
  });

  builder.addCase(UPDATE_DEPARTMENT_SUCCESS_ACTION, (state, action) => {
    state.update = {
      ...updateInitialState,
      message: action.payload.message,
      success: true,
    };
  });

  builder.addCase(UPDATE_DEPARTMENT_ERROR_ACTION, (state, action) => {
    state.update = {
      ...updateInitialState,
      error: true,
      message: action.payload,
    };
  });

  //Eliminar DEPARTMENT

  builder.addCase(DELETE_DEPARTMENT_REQUESTED_ACTION, (state) => {
    state.delete = { ...deleteInitialState, inProgress: true };
  });

  builder.addCase(DELETE_DEPARTMENT_SUCCESS_ACTION, (state, action) => {
    state.delete = {
      ...deleteInitialState,
      message: action.payload.message,
      success: true,
    };
  });

  builder.addCase(DELETE_DEPARTMENT_ERROR_ACTION, (state, action) => {
    state.delete = {
      ...deleteInitialState,
      error: true,
      message: action.payload,
    };
  });

  //listar DEPARTMENTS FILTERS
  builder.addCase(LIST_DEPARTMENT_FILTERS_REQUESTED_ACTION, (state) => {
    state.filters = { ...filtersInitialState };
  });

  builder.addCase(LIST_DEPARTMENT_FILTERS_SUCCESS_ACTION, (state, action) => {
    state.filters = { ...filtersInitialState, ...action.payload };
  });

  builder.addCase(LIST_DEPARTMENT_FILTERS_ERROR_ACTION, (state) => {
    state.filters = { ...filtersInitialState };
  });
});

export default departmentReducer;
