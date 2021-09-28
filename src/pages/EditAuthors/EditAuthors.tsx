import React, { FC, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Button } from "antd";

import { AuthorActionTypes } from "../../redux/types/authors";
import { ListInfo } from "../../components/ListInfo";
import { TitlePage } from "../../components/TitlePage";
import { Field } from "../../components/Field";

import { EditAuthorsWrapper } from "./styles";
import { IAuthor, IParams } from "../../types";

export const EditAuthors: FC = () => {
  const history = useHistory();
  const params = useParams<IParams>();
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const { dataAuthors } = useTypedSelector((state) => state.dataAuthors);

  let currentAuthor: IAuthor | undefined = dataAuthors.find(
    (el: IAuthor): boolean => el.id === +params.id
  );

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
      const editAuthor = dataAuthors.map((author) => {
        if (author.id === +params.id) {
          return {
            id: +params.id,
            last_name: lastName,
            first_name: firstName,
          };
        }
        return author;
      });
      dispatch({
        type: AuthorActionTypes.FETCH_AUTHOR,
        payload: editAuthor,
      });
      history.push("../authors");
    },
    [dataAuthors, dispatch, firstName, history, lastName, params.id]
  );

  return (
    <EditAuthorsWrapper>
      <Button
        style={{
          position: "absolute",
          top: "40px",
          left: "40px",
          alignSelf: "flex-start",
        }}
        onClick={() => history.push("/authors")}
      >
        Назад
      </Button>
      <TitlePage>Редактировать автора</TitlePage>
      <ListInfo>
        <Field>
          <label style={{ margin: "5px 0" }}>
            {currentAuthor?.first_name}
            <input value={firstName} onChange={changeFirstName} />
          </label>
          <label style={{ margin: "5px 0" }}>
            {currentAuthor?.last_name}
            <input value={lastName} onChange={changeLastName} />
          </label>
          <button onClick={editAuthor}>Отредактировать</button>
        </Field>
      </ListInfo>
    </EditAuthorsWrapper>
  );
};
