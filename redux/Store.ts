import { combineReducers, configureStore, Tuple } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { watcherSaga } from "../saga/RootSaga";
import authReducer from "./SliceAuth";
import expensesReducer from "./SliceAllExpenses";
import expensesDetailReducer from "./SliceExpenseDetails";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  authReducer: authReducer,
  expensesReducer: expensesReducer,
  expensesDetailReducer: expensesDetailReducer,
});

export const store = configureStore({
  reducer: reducer,
  middleware: () => new Tuple(sagaMiddleware),
});

sagaMiddleware.run(watcherSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
