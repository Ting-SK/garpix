import { Switch, Route } from "react-router-dom";
import { Authors } from "../pages/Authors";
import { Books } from "../pages/Books";
import { CreateAuthors } from "../pages/CreateAuthors";
import { CurrentAuthors } from "../pages/CurrentAuthors";
import { EditAuthors } from "../pages/EditAuthors";
import { MainPage } from "../pages/MainPage";

export const Routes = () => {
  return (
    <Switch>
      <Route path={"/"} exact>
        <MainPage />
      </Route>
      <Route path={"/books"} exact>
        <Books />
      </Route>{" "}
      <Route path={"/authors"} exact>
        <Authors />
      </Route>
      <Route path={"/authors/:id"}>
        <CurrentAuthors />
      </Route>{" "}
      <Route path={"/edit/:id"}>
        <EditAuthors />
      </Route>
      <Route path={"/create"}>
        <CreateAuthors />
      </Route>
    </Switch>
  );
};
