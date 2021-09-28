import { FC, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { AuthorActionTypes } from "../../redux/types/authors";
import { Button } from "antd";

import { TitlePage } from "../../components/TitlePage";
import { ListInfo } from "../../components/ListInfo";
import { Field } from "../../components/Field";

import { CreateAuthorsWrapper } from "./styles";
import { IAuthor } from "../../types";

export const CreateAuthors: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [newName, setNewName] = useState<string>("");
  const [newSurname, setNewSurname] = useState<string>("");

  const { dataAuthors } = useTypedSelector((state) => state.dataAuthors);

  const changeName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setNewName(e.target.value);
    },
    [setNewName]
  );

  const changeSurname = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setNewSurname(e.target.value);
    },
    [setNewSurname]
  );

  const createAuthor = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const { id } = dataAuthors[dataAuthors.length - 1];
      let newAuthor: IAuthor = {
        first_name: newName,
        last_name: newSurname,
        id: id + 1,
      };
      dataAuthors.push(newAuthor);
      dispatch({
        type: AuthorActionTypes.FETCH_AUTHOR,
        payload: dataAuthors,
      });
      history.push("../authors");
    },
    [dataAuthors, dispatch, history, newName, newSurname]
  );

  return (
    <CreateAuthorsWrapper>
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

      <TitlePage>Создать автора</TitlePage>
      <ListInfo>
        <Field>
          <label style={{ margin: "5px 0" }}>
            Новое имя
            <input value={newName} onChange={changeName} />
          </label>
          <label style={{ margin: "5px 0 " }}>
            Новая Фамилия
            <input value={newSurname} onChange={changeSurname} />
          </label>
          <button onClick={createAuthor}>Добавить</button>
        </Field>
      </ListInfo>
    </CreateAuthorsWrapper>
  );
};
