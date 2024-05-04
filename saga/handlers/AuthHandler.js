import { call, put } from "redux-saga/effects";
import { loginRQ } from "../requests/AuthRequest";
import { loginSuccess, loginFailed } from "../../redux/SliceAuth";

export function* handleLogin(action) {
  try {
    const response = yield call(loginRQ);
    const { data } = response;
    yield put(
      loginSuccess({
        user: {
          name: "Dipen",
          dob: "06-09-90",
        },
      })
    );
    console.log(data);
  } catch (error) {
    console.error(error);
    yield put(loginFailed(error));
  }
}
