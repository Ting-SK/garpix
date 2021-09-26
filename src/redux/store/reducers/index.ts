import { booksReducer } from "./booksReducer";
import { combineReducers } from "redux";
import { authorsReducer } from "./authorReducer";

export const rootReducer = combineReducers({
  dataAuthors: authorsReducer,
  dataBooks: booksReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
