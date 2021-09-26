import { IBook } from './../../types/index';

export interface BooksState {
  dataBooks: IBook[];
}
export enum BooksActionTypes {
  FETCH_BOOKS = "FETCH_BOOKS",
}

interface FetchBooksSuccessAction {
  type: BooksActionTypes.FETCH_BOOKS;
  payload: any[];
}

export type BookAction = FetchBooksSuccessAction;
