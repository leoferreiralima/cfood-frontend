import React from "react";

import * as SessionActions from "./../../store/ducks/session/actions";
import { SessionState, ILogin } from "./../../store/ducks/session/types";
import { Dispatch, bindActionCreators } from "redux";

import { Form, Input } from "@rocketseat/unform";
import { connect } from "react-redux";
import { ApplicationState } from "../../store";

interface StateProps {
  session: SessionState;
}

interface DispatchProps {
  loginRequest(data: ILogin): void;
}

type Props = StateProps & DispatchProps;

const Login: React.FC<Props> = ({ session, loginRequest }) => {
  const handleSubmit = ({ username, password }: any) => {
    loginRequest({ username, password });
  };

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Input name="username" label="usuario"></Input>
        <br />
        <Input name="password" label="senha" type="password"></Input>
        <br />
        <button type="submit">Send</button>
      </Form>
      {session.loading && "carregando"} <br />
      {session.error && "error"}
    </div>
  );
};

const mapStateToProps = ({ session }: ApplicationState) => ({
  session
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(SessionActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
