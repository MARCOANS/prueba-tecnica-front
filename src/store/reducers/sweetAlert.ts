import { PayloadAction, createReducer } from "@reduxjs/toolkit";
import { SHOW_ALERT2_ACTION, HIDE_ALERT2_ACTION } from "../actions/sweetAlert";
import * as alert2Actions from "store/actions/sweetAlert";
import {
  ShowSweetAlert,
  SweetAlert,
  SweetAlertType,
} from "types/sweet-alert";
import store from "../index";

const initialState: SweetAlert = {
  show: false,
  text: "",
  reverseButtons: true,
  icon: SweetAlertType.Success,
  title: "Éxito !",
  cancelButtonText: `Cancelar`,
  /*   customClass: {
          cancelButton: "btn btn-danger btn-sm",
          confirmButton: "btn btn-success btn-sm",
        }, */
  didClose: () => {
    store.dispatch(alert2Actions.HIDE_ALERT2_ACTION());
  },
};

const cursoReducer = createReducer(initialState, (builder) => {
  builder.addCase(
    SHOW_ALERT2_ACTION,
    (state, action: PayloadAction<ShowSweetAlert>) => {
      const payload = action.payload;
      return {
        ...initialState,
        show: true,
        ...payload,
      };
    }
  );

  builder.addCase(HIDE_ALERT2_ACTION, () => ({ ...initialState }));
});

export default cursoReducer;
