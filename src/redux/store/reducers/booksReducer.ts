import { BooksActionTypes, BookAction, BooksState } from "../../types/books";

const initialState: BooksState = {
  dataBooks: [],
};

export const booksReducer = (
  state = initialState,
  action: BookAction
): BooksState => {
  switch (action.type) {
    case BooksActionTypes.FETCH_BOOKS:
      return { dataBooks: action.payload };
    default:
      return state;
  }
};
