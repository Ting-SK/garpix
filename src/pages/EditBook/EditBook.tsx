import React, { FC, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import { Button } from "antd";
import { BooksActionTypes } from "../../redux/types/books";
import { ListInfo } from "../../components/ListInfo";
import { Field } from "../../components/Field";

import { IParams } from "../../types";
import { EditBookWrapper } from "./styles";

export const EditBook: FC = () => {
  const [title, setTitle] = useState<string>("");
  const [isYear, setYear] = useState<string>("");
  const [selectAuthor, setSelectAuthor] = useState<string>('1');

  const history = useHistory();
  const params = useParams<IParams>();
  const dispatch = useDispatch();

  const { dataBooks } = useTypedSelector((state) => state.dataBooks);
  const { dataAuthors } = useTypedSelector((state) => state.dataAuthors);

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
  console.log(dataBooks)

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
          <button onClick={editBooks}>Отредактировать</button>
        </Field>
      </ListInfo>
    </EditBookWrapper>
  );
};
