import { takeEvery, takeLatest } from "redux-saga/effects";
import { handleLogin } from "./handlers/AuthHandler";
import { login } from "../redux/SliceAuth";
import { getAllExpenses } from "../redux/SliceAllExpenses";
import {
  handleGetAllExpenses,
  handleGetExpenseDetails,
} from "./handlers/ExpenseHandler";
import { getExpenseDetails } from "../redux/SliceExpenseDetails";

export function* watcherSaga() {
  // yield takeEvery(getCount, handleGetUser);
  yield takeLatest(login, handleLogin);
  yield takeLatest(getAllExpenses, handleGetAllExpenses);
  yield takeLatest(getExpenseDetails, handleGetExpenseDetails);
}
