export enum SessionType {
  LOGIN_REQUEST = "@session/LOGIN_REQUEST",
  LOGIN_SUCCESS = "@session/LOGIN_SUCCESS",
  LOGIN_FAILURE = "@session/LOGIN_FAILURE",
  LOGOUT_REQUEST = "@session/LOGOUT_REQUEST"
}

export interface ILogin {
  username: string;
  password: string;
}

export interface ILoginSuccess {
  token: string;
  profile: IProfile;
}

export interface IProfile {
  id: number;
  username: string;
  superUser: boolean;
  firstName: string;
  lastName: string;
}
export interface SessionState {
  readonly token?: string;
  readonly isAuthenticated: boolean;
  readonly loading: boolean;
  readonly error: boolean;
  readonly profile?: IProfile;
}
