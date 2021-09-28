import { FC } from "react";
import { Switch, Route } from "react-router-dom";
import { routes } from "../pages";

export const Routes: FC = () => {
  return (
    <Switch>
      {routes.map((route, i) => (
        <Route key={i} {...route} />
      ))}
    </Switch>
  );
};
