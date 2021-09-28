import { Switch, Route } from "react-router-dom";
import { Authors } from "../pages/Authors";
import { Books } from "../pages/Books";
import { CreateAuthors } from "../pages/CreateAuthors";
import { CreateBook } from "../pages/CreateBook";
import { CurrentAuthors } from "../pages/CurrentAuthors";
import { CurrentBooks } from "../pages/CurrentBooks";
import { EditAuthors } from "../pages/EditAuthors";
import { EditBook } from "../pages/EditBook";
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
      <Route path={"/books/:id"}>
        <CurrentBooks />
      </Route>{" "}
      <Route path={"/editauthor/:id"}>
        <EditAuthors />
      </Route>{" "}
      <Route path={"/editbook/:id"}>
        <EditBook />
      </Route>
      <Route path={"/createauthor"}>
        <CreateAuthors />
      </Route>{" "}
      <Route path={"/createbook"}>
        <CreateBook />
      </Route>
    </Switch>
  );
};
