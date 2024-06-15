import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import { persistStore } from "redux-persist";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();


const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
      thunk: true,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);


export default store;


export const persistor = persistStore(store);


export type AppDispatch = typeof store.dispatch;
