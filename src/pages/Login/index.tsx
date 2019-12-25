import React from "react";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Form, Input } from "@rocketseat/unform";

import * as SessionActions from "./../../store/ducks/session/actions";
import { SessionState, ILogin } from "./../../store/ducks/session/types";

import { ApplicationState } from "../../store";
import { Redirect } from "react-router";

interface StateProps extends SessionState {}

interface DispatchProps {
  loginRequest(data: ILogin): void;
}

type Props = StateProps & DispatchProps;

const Login: React.FC<Props> = ({
  loading,
  error,
  isAuthenticated,
  loginRequest
}) => {
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
      {isAuthenticated && (
        <Redirect
          to={{
            pathname: "/dashboard"
          }}
        ></Redirect>
      )}
      {loading && "carregando"} <br />
      {error && "error"}
    </div>
  );
};

const mapStateToProps = ({
  session: { loading, error, isAuthenticated }
}: ApplicationState) => ({
  loading,
  error,
  isAuthenticated
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(SessionActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
