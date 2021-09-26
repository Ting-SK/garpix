import {
  AuthorAction,
  AuthorActionTypes,
  AuthorsState,
} from "../../types/authors";

const initialState: AuthorsState = {
  dataAuthors: [],
};

export const authorsReducer = (
  state = initialState,
  action: AuthorAction
): AuthorsState => {
  switch (action.type) {
    case AuthorActionTypes.FETCH_AUTHOR:
      return { dataAuthors: action.payload };
    case AuthorActionTypes.EDIT_AUTHOR:
      // return { dataAuthors: action.payload };
      return {
        dataAuthors: action.payload,
      };

    default:
      return state;
  }
};
