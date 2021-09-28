import React from "react";
import { Authors } from "./Authors";
import { Books } from "./Books";
import { CreateAuthors } from "./CreateAuthors";
import { CreateBook } from "./CreateBook";
import { CurrentAuthors } from "./CurrentAuthors";
import { CurrentBooks } from "./CurrentBooks";
import { EditAuthors } from "./EditAuthors";
import { EditBook } from "./EditBook";
import { MainPage } from "./MainPage";

interface IRoutes {
  path: string;
  exact?: boolean;
  component: React.FunctionComponent;
}

export const routes: IRoutes[] = [
  {
    path: "/",
    exact: true,
    component: MainPage,
  },
  {
    path: "/authors",
    exact: true,
    component: Authors,
  },
  {
    path: "/authors/:id",
    component: CurrentAuthors,
  },
  {
    path: "/books",
    exact: true,
    component: Books,
  },
  {
    path: "/books/:id",
    component: CurrentBooks,
  },
  {
    path: "/editauthor/:id",
    component: EditAuthors,
  },
  {
    path: "/editbook/:id",
    component: EditBook,
  },
  {
    path: "/createauthor",
    component: CreateAuthors,
  },
  {
    path: "/createbook",
    component: CreateBook,
  },
];
