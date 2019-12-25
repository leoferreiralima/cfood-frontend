import api from "../../../services/api";
import { call, put } from "redux-saga/effects";
import { loginSuccess, loginFailure } from "./actions";

export function* login(action: any) {
  try {
    const response = yield call(api.post, "/auth/", action.payload);
    const { token } = response.data;
    yield put(loginSuccess(token));
  } catch (err) {
    yield put(loginFailure());
  }
}
