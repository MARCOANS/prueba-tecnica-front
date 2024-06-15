import { createAction } from "@reduxjs/toolkit";
import { sweetAlertActionTypes as actions } from "../action-types/sweetAlert";
import { ShowSweetAlert } from "types/sweet-alert";

const SHOW_ALERT2_ACTION = createAction<ShowSweetAlert>(
  actions.SWEET_ALERT_SHOW
);
const HIDE_ALERT2_ACTION = createAction(actions.SWEET_ALERT_HIDE);

export { SHOW_ALERT2_ACTION, HIDE_ALERT2_ACTION };
