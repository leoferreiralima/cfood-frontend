import { action } from "typesafe-actions";
import { ILogin, SessionType } from "./types";

export const loginRequest = (data: ILogin) =>
  action(SessionType.LOGIN_REQUEST, data);

export const loginSuccess = (data: string) =>
  action(SessionType.LOGIN_SUCCESS, data);

export const loginFailure = () => action(SessionType.LOGIN_FAILURE);
