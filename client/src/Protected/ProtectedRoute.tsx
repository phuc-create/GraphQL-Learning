import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect, RouteProps } from "react-router-dom";
export type ProtectedRouteProps = {
  component: React.ComponentType<any>;
} & RouteProps;
const ProtectedRoute = ({
  component: Component,
  ...rest
}: ProtectedRouteProps) => {
  const { user, isAuthenticated } = useSelector(
    (state: { user: any }) => state.user
  );
  console.log(user, isAuthenticated);
  return (
    <Route
      {...rest}
      render={(props) =>
        user !== null && isAuthenticated !== false ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect to="/o2auth" />
        )
      }
    />
  );
};

export default ProtectedRoute;
