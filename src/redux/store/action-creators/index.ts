import * as AuthorActionCreators from "./authors";
import * as BookActionCreators from "./books";

export const actionCreator = {
  ...AuthorActionCreators,
  ...BookActionCreators,
};
