import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";

import { ApplicationState } from "@store/index";
import { FaHome } from "react-icons/fa";
import Login from "@pages/Login";

import * as SessionActions from "@ducks/session/actions";
import PrivateRoute from "@components/PrivateRoute";
import Dashboard from "@pages/Dashboard";
import { IconType } from "react-icons/lib/cjs";

import Template from "@pages/Template";

interface StateProps {
  isAuthenticated: boolean;
}

type Props = StateProps;

export interface IRoute {
  path: string;
  container: React.ComponentType<any>;
  icon: IconType;
  title: string;
}

const Routes: React.FC<Props> = ({ isAuthenticated }) => {
  const privateRoutes: Array<IRoute> = [
    {
      path: "/dashboard",
      title: "Dashboard",
      container: Dashboard,
      icon: FaHome
    }
  ];
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login}></Route>

        {isAuthenticated &&
          privateRoutes.map(({ path, container: component }) => (
            <Template routes={privateRoutes} key={path}>
              <PrivateRoute
                exact
                path={path}
                component={component}
                hasAuthorization={isAuthenticated}
              ></PrivateRoute>
            </Template>
          ))}
        {!isAuthenticated && <Redirect to="/login"></Redirect>}
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
