import api from "../../../services/api";
import { call, put } from "redux-saga/effects";
import { loginSuccess, loginFailure } from "./actions";

export function* login(action: any) {
  try {
    const response = yield call(api.post, "/token-auth/", action.payload);
    const { token } = response.data;
    yield put(loginSuccess(token));
  } catch (err) {
    Object.keys(err).forEach(key => {
      console.log(key, err[key]);
    });
    yield put(loginFailure());
  }
}
