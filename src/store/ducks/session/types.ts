export enum SessionType {
  LOGIN_REQUEST = "@session/LOGIN_REQUEST",
  LOGIN_SUCCESS = "@session/LOGIN_SUCCESS",
  LOGIN_FAILURE = "@session/LOGIN_FAILURE"
}

export interface ILogin {
  username: string;
  password: string;
}

export interface SessionState {
  readonly token: string;
  readonly loading: boolean;
  readonly error: boolean;
}
