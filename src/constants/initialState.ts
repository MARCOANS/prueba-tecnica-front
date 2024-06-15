import { CreateState, ListState, ShowState } from "types/state";
import { LIMIT } from "./request";

export const createInitialState: CreateState = {
  inProgress: false,
  success: false,
  error: false,
  message: "",
  record: null,
};

export const showInitialState: ShowState = {
  inProgress: false,
  success: false,
  error: false,
  message: "",
  record: {},
};

export const updateInitialState = {
  inProgress: false,
  success: false,
  error: false,
  message: "",
};

export const listInitialState: ListState = {
  inProgress: false,
  pagination: {},
  data: [],
  params: {
    perPage: LIMIT,
    page: 1,
    sorts: [],
    term: null,
  },
};

export const deleteInitialState = {
  inProgress: false,
  success: false,
  error: false,
  message: "",
};


