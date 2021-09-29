import { FC, useCallback, useEffect, useState } from "react";
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
import { ErrorSpan } from "../../components/ErrorSpan";

export const CreateAuthors: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { dataAuthors } = useTypedSelector((state) => state.dataAuthors);

  const [firstName, setFirstName] = useState<string>("");
  const [firstNameDirty, setFirstNameDirty] = useState<boolean>(false);
  const [firstNameError, setFirstNameError] = useState<string>(
    "Поле не может быть пустым"
  );

  const [lastName, setLastName] = useState<string>("");
  const [lastNameDirty, setLastNameDirty] = useState<boolean>(false);
  const [lastNameError, setLastNameError] = useState<string>(
    "Поле не может быть пустым"
  );

  const [formValid, setFormValid] = useState<boolean>(false);

  const changeFirstName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFirstName(e.target.value);
      if (!e.target.value.length) {
        setFirstNameError("Поле не может быть пустым");
      } else {
        setFirstNameError("");
      }
    },
    [setFirstName]
  );

  const changeLastName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLastName(e.target.value);
      if (!e.target.value.length) {
        setLastNameError("Поле не может быть пустым");
      } else {
        setLastNameError("");
      }
    },
    [setLastName]
  );

  const blurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.value) {
      case firstName:
        setFirstNameDirty(true);
        break;
      case lastName:
        setLastNameDirty(true);
        break;
    }
  };

  useEffect(() => {
    if (firstNameError || lastNameError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [firstNameError, lastNameError]);

  const createAuthor = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const { id } = dataAuthors[dataAuthors.length - 1];
      let newAuthor: IAuthor = {
        first_name: firstName,
        last_name: lastName,
        id: id + 1,
      };
      dataAuthors.push(newAuthor);
      dispatch({
        type: AuthorActionTypes.FETCH_AUTHOR,
        payload: dataAuthors,
      });
      history.push("../authors");
    },
    [dataAuthors, dispatch, history, firstName, lastName]
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
          <label style={{ margin: "5px 0", position: "relative" }}>
            Новое имя
            <input
              value={firstName}
              onChange={(e) => changeFirstName(e)}
              onBlur={(e) => blurHandler(e)}
              placeholder="Укажите имя автора"
            />
            {firstNameDirty && firstNameError && (
              <ErrorSpan>{firstNameError}</ErrorSpan>
            )}
          </label>
          <label style={{ margin: "5px 0", position: "relative" }}>
            Новая Фамилия
            <input
              value={lastName}
              onChange={(e) => changeLastName(e)}
              onBlur={(e) => blurHandler(e)}
              placeholder="Укажите фамилию автора"
            />
            {lastNameDirty && lastNameError && (
              <ErrorSpan>{lastNameError}</ErrorSpan>
            )}
          </label>
          <button disabled={!formValid} onClick={createAuthor}>
            Добавить
          </button>
        </Field>
      </ListInfo>
    </CreateAuthorsWrapper>
  );
};
