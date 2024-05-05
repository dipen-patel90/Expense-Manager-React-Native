import { call, put } from "redux-saga/effects";
import {
  getAllExpensesRQ,
  getExpenseDetailsRQ,
} from "../requests/ExpenseRequest";
import {
  getAllExpensesSucceed,
  getAllExpensesFailed,
} from "../../redux/SliceAllExpenses";
import {
  getExpenseDetailsFailed,
  getExpenseDetailsSucceed,
} from "../../redux/SliceExpenseDetails";

export function* handleGetAllExpenses() {
  try {
    const response = yield call(getAllExpensesRQ);
    const { data } = response;
    console.log(data);
    yield put(getAllExpensesSucceed(data));
    console.log(data);
  } catch (error) {
    console.error(error);
    yield put(getAllExpensesFailed(error));
  }
}

export function* handleGetExpenseDetails(action) {
  const { id } = action.payload;
  try {
    const response = yield call(getExpenseDetailsRQ, id);
    const { data } = response;
    console.log(data);
    yield put(getExpenseDetailsSucceed(data));
    console.log(data);
  } catch (error) {
    console.error(error);
    yield put(getExpenseDetailsFailed(error));
  }
}
