import { call, put } from "redux-saga/effects";
import { loginRQ } from "../requests/AuthRequest";
import { loginSuccess, loginFailed } from "../../redux/SliceAuth";

export function* handleLogin(action) {
  const { username, password } = action.payload;
  try {
    const response = yield call(loginRQ, username, password);
    const { data } = response;
    console.log(data);
    yield put(loginSuccess(data));
    console.log(data);
  } catch (error) {
    console.error(error);
    yield put(loginFailed(error));
  }
}
