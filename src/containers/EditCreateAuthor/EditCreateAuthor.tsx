import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import { ErrorSpan } from "../../components/ErrorSpan";
import { Field } from "../../components/Field";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { AuthorActionTypes } from "../../redux/types/authors";
import { IAuthor, IParams } from "../../types";

interface EditCreateAuthorProps {
  create?: boolean;
}

export const EditCreateAuthor: FC<EditCreateAuthorProps> = ({ create }) => {
  const history = useHistory();
  const params = useParams<IParams>();
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

  let currentAuthor: IAuthor | undefined = dataAuthors.find(
    (el: IAuthor): boolean => el.id === +params.id
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
    <Field>
      <label style={{ margin: "5px 0", position: "relative" }}>
        {create ? "Имя автора" : currentAuthor?.first_name}
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
        {create ? "Фамилия автора" : currentAuthor?.last_name}
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
      {create ? (
        <button disabled={!formValid} onClick={createAuthor}>
          Добавить
        </button>
      ) : (
        <button disabled={!formValid} onClick={editAuthor}>
          Отредактировать
        </button>
      )}
    </Field>
  );
};
