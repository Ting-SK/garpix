import React, { FC, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import { Button } from "antd";
import { BooksActionTypes } from "../../redux/types/books";
import { ListInfo } from "../../components/ListInfo";
import { Field } from "../../components/Field";

import { IParams } from "../../types";
import { EditBookWrapper } from "./styles";
import { ErrorSpan } from "../../components/ErrorSpan";

export const EditBook: FC = () => {
  const history = useHistory();
  const params = useParams<IParams>();
  const dispatch = useDispatch();

  const { dataBooks } = useTypedSelector((state) => state.dataBooks);
  const { dataAuthors } = useTypedSelector((state) => state.dataAuthors);

  const [title, setTitle] = useState<string>("");
  const [titleDirty, setTitleDirty] = useState<boolean>(false);
  const [titleError, setTitleError] = useState<string>(
    "Поле не может быть пустым"
  );

  const [isYear, setIsYear] = useState<string>("");
  const [isYearDirty, setIsYearDirty] = useState<boolean>(false);
  const [isYearError, setIsYearError] = useState<string>(
    "Поле не может быть пустым"
  );

  const [formValid, setFormValid] = useState<boolean>(false);

  const changeTitle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
      if (!e.target.value.length) {
        setTitleError("Поле не может быть пустым");
      } else {
        setTitleError("");
      }
    },
    [setTitle]
  );

  const changeIsYear = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsYear(e.target.value);
      if (!e.target.value.length) {
        setIsYearError("Поле не может быть пустым");
      } else {
        setIsYearError("");
      }
    },
    [setIsYear]
  );

  const blurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.value) {
      case title:
        setTitleDirty(true);
        break;
      case isYear:
        setIsYearDirty(true);
        break;
    }
  };

  useEffect(() => {
    if (titleError || isYearError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [titleError, isYearError]);

  const [selectAuthor, setSelectAuthor] = useState<string>("1");

  const changeAuthor = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectAuthor(e.target.value);
    },
    [setSelectAuthor]
  );

  const editBooks = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const editBook = dataBooks.map((book) => {
        if (book.id === +params.id) {
          return {
            id: +params.id,
            title: title,
            created_at: isYear,
            author_id: +selectAuthor,
          };
        }
        return book;
      });
      dispatch({
        type: BooksActionTypes.FETCH_BOOKS,
        payload: editBook,
      });
      history.push("../books");
      console.log(dataBooks);
    },
    [dataBooks, dispatch, history, isYear, params.id, selectAuthor, title]
  );

  return (
    <EditBookWrapper>
      <Button
        style={{
          position: "absolute",
          top: "40px",
          left: "40px",
          alignSelf: "flex-start",
        }}
        onClick={() => history.push("/books")}
      >
        Назад
      </Button>
      <ListInfo>
        <Field>
          <label style={{ margin: "5px 0", position: "relative" }}>
            Введите название книги
            <input
              value={title}
              onChange={(e) => changeTitle(e)}
              onBlur={(e) => blurHandler(e)}
              placeholder="Укажите название книги"
            />
            {titleDirty && titleError && <ErrorSpan>{titleError}</ErrorSpan>}
          </label>
          Выберите автора
          <select onChange={changeAuthor} value={selectAuthor}>
            {dataAuthors.map((el) => {
              return <option value={el.id}>{el.last_name}</option>;
            })}
          </select>
          <label style={{ margin: "5px 0", position: "relative" }}>
            Напишите год публикации
            <input
              value={isYear}
              onChange={(e) => changeIsYear(e)}
              onBlur={(e) => blurHandler(e)}
              placeholder="Укажите год публикации"
            />
            {isYearDirty && isYearError && <ErrorSpan>{isYearError}</ErrorSpan>}
          </label>
          <button disabled={formValid} onClick={editBooks}>
            Отредактировать
          </button>
        </Field>
      </ListInfo>
    </EditBookWrapper>
  );
};
