import { combineReducers, configureStore, Tuple } from "@reduxjs/toolkit";
import authReducer from "./SliceAuth";
import createSagaMiddleware from "@redux-saga/core";
import expensesReducer from "./SliceExpense";
import { watcherSaga } from "../saga/RootSaga";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  authReducer: authReducer,
  expensesReducer: expensesReducer,
});

export const store = configureStore({
  reducer: reducer,
  middleware: () => new Tuple(sagaMiddleware),
});

sagaMiddleware.run(watcherSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
