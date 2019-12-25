import React from "react";
import { RouteProps, Route, RouteComponentProps, Redirect } from "react-router";

interface PrivateRouteProps extends RouteProps {
  hasAuthorization: boolean;
  redirect?: string;
}
const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  redirect,
  hasAuthorization,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props: RouteComponentProps<any>) =>
      hasAuthorization ? (
        Component && <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: redirect || "/login",
            state: { from: props.location }
          }}
        ></Redirect>
      )
    }
  />
);

export default PrivateRoute;
