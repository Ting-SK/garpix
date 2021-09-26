import { AuthorAction, AuthorActionTypes } from "../../types/authors";
import { Dispatch } from "redux";
import { dataAuthors } from "../../../services/data";

export const fetchAuthors = () => {
  return async (dispatch: Dispatch<AuthorAction>) => {
    dispatch({
      type: AuthorActionTypes.FETCH_AUTHOR,
      payload: dataAuthors,
    });
  };
};

