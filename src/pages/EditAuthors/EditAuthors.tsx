import React, { FC, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { AuthorActionTypes } from "../../redux/types/authors";
import { IAuthor, IParams } from "../../types";
import { EditAuthorsWrapper } from "./styles";

interface EditAuthorsProps {}

export const EditAuthors: FC<EditAuthorsProps> = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const history = useHistory();
  const params = useParams<IParams>();
  const dispatch = useDispatch();

  const { dataAuthors } = useTypedSelector((state) => state.dataAuthors);

  let currentAuthor: IAuthor | undefined = dataAuthors.find(
    (el) => el.id === +params.id
  );

  console.log(currentAuthor);

  const changeFirstName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFirstName(e.target.value);
    },
    [setFirstName]
  );

  const changeLastName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLastName(e.target.value);
    },
    [setLastName]
  );

  const editAuthor = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const editAuthor = dataAuthors.map((rec) => {
        if (rec.id === +params.id) {
          return {
            id: +params.id,
            last_name: lastName,
            first_name: firstName,
          };
        }
        return rec;
      });
      dispatch({
        type: AuthorActionTypes.FETCH_AUTHOR,
        payload: editAuthor,
      });
      console.log(dataAuthors, editAuthor);
      history.push("../authors");
    },
    [dataAuthors, dispatch, firstName, history, lastName, params.id]
  );

  return (
    <EditAuthorsWrapper>
      <label>
        {currentAuthor?.first_name}
        <input value={firstName} onChange={changeFirstName} />
      </label>
      <label>
        {currentAuthor?.last_name}
        <input value={lastName} onChange={changeLastName} />
      </label>
      <button onClick={editAuthor}>Отредактировать</button>
    </EditAuthorsWrapper>
  );
};
