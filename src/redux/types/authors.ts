import { IAuthor } from "../../types";

export interface AuthorsState {
  dataAuthors: IAuthor[];
}
export enum AuthorActionTypes {
  FETCH_AUTHOR = "FETCH_AUTHOR",
}

interface FetchAuthorSuccessAction {
  type: AuthorActionTypes.FETCH_AUTHOR;
  payload: any[];
}

export type AuthorAction = FetchAuthorSuccessAction;
