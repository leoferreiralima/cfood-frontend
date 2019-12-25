import { SessionState, SessionType } from "./types";
import { Reducer } from "redux";

const INITIAL_STATE: SessionState = {
  token: "",
  loading: false,
  error: false,
  isAuthenticated: false
};

const reducer: Reducer<SessionState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SessionType.LOGIN_REQUEST:
      return { ...state, loading: true, error: false };
    case SessionType.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        token: action.payload,
        isAuthenticated: true
      };
    case SessionType.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        token: "",
        isAuthenticated: false
      };
    default:
      return state;
  }
};

export default reducer;
