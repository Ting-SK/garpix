import { dataBooks } from "./../../../services/data/index";
import { Dispatch } from "redux";
import { BookAction, BooksActionTypes } from "../../types/books";

export const fetchBooks = () => {
  return async (dispatch: Dispatch<BookAction>) => {
    dispatch({
      type: BooksActionTypes.FETCH_BOOKS,
      payload: dataBooks,
    });
  };
};
