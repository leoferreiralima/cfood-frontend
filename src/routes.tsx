import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";

import { ApplicationState } from "./store";

import Login from "./pages/Login";

import * as SessionActions from "./store/ducks/session/actions";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";

interface StateProps {
  isAuthenticated: boolean;
}

type Props = StateProps;

const Routes: React.FC<Props> = ({ isAuthenticated }) => {
  console.log(isAuthenticated);
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute
          exact
          path="/dashboard"
          component={Dashboard}
          hasAuthorization={isAuthenticated}
        ></PrivateRoute>
        <Route exact path="/login" component={Login}></Route>
        <Redirect from="/" to="/dashboard"></Redirect>
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = ({
  session: { isAuthenticated }
}: ApplicationState) => ({ isAuthenticated });

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(SessionActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
