import { takeEvery, takeLatest } from "redux-saga/effects";
import { handleLogin } from "./handlers/AuthHandler";
import { login } from "../redux/SliceAuth";

export function* watcherSaga() {
  // yield takeEvery(getCount, handleGetUser);
  yield takeLatest(login, handleLogin);
}
