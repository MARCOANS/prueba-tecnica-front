//Redux
/* import { rootReducerState } from "../reducers";
 */
const loggedUserSelector = (state: any) => {
  return state.auth.user;
};

/* const loginErrorMsgSelector = (state: RootReducerState) => {
  return state.user.userLoginErrorMsg;
};
const guestStatusSelector = (state: RootReducerState) => {
  return state.user.isGuest || false;
};
const wcTokenSelector = (state: RootReducerState) => {
  return state.user.WCToken;
};
const wcTrustedTokenSelector = (state: RootReducerState) => {
  return state.user.WCTrustedToken;
};

const logonIdSelector = (state: RootReducerState) => {
  return state.user.details?.logonId || "";
};

const userIdSelector = (state: RootReducerState) => {
  return state.user.userId;
};

const forUserIdSelector = (state: RootReducerState) => {
  return state.user.forUserId;
};

const userNameSelector = (state: RootReducerState) => {
  const firstName = state.user.details?.firstName || "";
  const lastName = state.user.details?.lastName || "";
  return { firstName, lastName };
};

const userInitStatusSelector = (state: RootReducerState) => {
  return state.user.initiatedFromStorage;
};

const userLastUpdatedSelector = (state: RootReducerState) => {
  return state.user.lastUpdated;
};

const registrationStatusSelector = (state: RootReducerState) => {
  return state.user.userRegistration || false;
}; */

export {
  loggedUserSelector,
  /*   loginStatusSelector,
  loginErrorMsgSelector,
  guestStatusSelector,
  wcTokenSelector,
  wcTrustedTokenSelector,
  logonIdSelector,
  registrationStatusSelector,
  userNameSelector,
  userIdSelector,
  userInitStatusSelector,
  userLastUpdatedSelector,
  forUserIdSelector, */
};
