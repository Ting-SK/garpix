import React, { FC, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import { Button } from "antd";
import { BooksActionTypes } from "../../redux/types/books";
import { ListInfo } from "../../components/ListInfo";
import { Field } from "../../components/Field";

import { IBook } from "../../types";
import { CreateBookWrapper } from "./styles";

export const CreateBook: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { dataBooks } = useTypedSelector((state) => state.dataBooks);
  const { dataAuthors } = useTypedSelector((state) => state.dataAuthors);

  const [title, setTitle] = useState<string>("");
  const [isYear, setYear] = useState<string>("");
  const [selectAuthor, setSelectAuthor] = useState<string>("");

  const changeTitle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
    },
    [setTitle]
  );

  const changeYear = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setYear(e.target.value);
    },
    [setYear]
  );

  const changeAuthor = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectAuthor(e.target.value);
    },
    [setSelectAuthor]
  );

  const editBooks = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const { id } = dataBooks[dataBooks.length - 1];
      let newBook: IBook = {
        id: id + 1,
        title: title,
        created_at: +isYear,
        author_id: +selectAuthor,
      };
      dataBooks.push(newBook);
      dispatch({
        type: BooksActionTypes.FETCH_BOOKS,
        payload: dataBooks,
      });
      history.push("../books");
    },
    [dataBooks, dispatch, history, isYear, selectAuthor, title]
  );

  return (
    <CreateBookWrapper>
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
          <label>
            Введите название книги
            <input value={title} onChange={changeTitle} />
          </label>
          Выберите автора
          <select onChange={changeAuthor} value={selectAuthor}>
            {dataAuthors.map((el) => {
              return <option value={el.id}>{el.last_name}</option>;
            })}
          </select>
          <label>
            Напишите год публикации{" "}
            <input value={isYear} onChange={changeYear} />
          </label>
          <button onClick={editBooks}>Создать</button>
        </Field>
      </ListInfo>
    </CreateBookWrapper>
  );
};
