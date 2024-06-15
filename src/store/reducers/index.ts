import { combineReducers } from "redux";

import department, { DepartmentState } from "./department";
import sweetAlert from "./sweetAlert";

const reducers = {
  department,
  sweetAlert,
};

export interface RootReducerState {
  department: DepartmentState;
  sweetAlert: object;
}

const rootReducer = combineReducers(reducers);
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
