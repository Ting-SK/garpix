import React, { FC, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
// import { AuthorActionTypes } from "../../redux/types/authors";
import { IBook, IParams } from "../../types";
import { EditBookWrapper } from "./styles";
import { Button } from "antd";
import { BooksActionTypes } from "../../redux/types/books";

export const EditBook: FC = () => {
  const [title, setTitle] = useState<string>("");
  const [isYear, setYear] = useState<string>("");
  const [selectAuthor, setSelectAuthor] = useState<string>("");

  const history = useHistory();
  const params = useParams<IParams>();
  const dispatch = useDispatch();

  const { dataBooks } = useTypedSelector((state) => state.dataBooks);
  const { dataAuthors } = useTypedSelector((state) => state.dataAuthors);

  let currentBook: IBook | undefined = dataBooks.find(
    (el) => el.id === +params.id
  );

  console.log(currentBook);

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
      const editBook = dataBooks.map((rec) => {
        if (rec.id === +params.id) {
          return {
            id: +params.id,
            title: title,
            created_at: isYear,
            author_id: +selectAuthor,
          };
        }
        return rec;
      });
      dispatch({
        type: BooksActionTypes.FETCH_BOOKS,
        payload: editBook,
      });
      console.log(editBook, "editBook");
      history.push("../books");
    },
    [dataBooks, dispatch, history, isYear, params.id, selectAuthor, title]
  );

  return (
    <EditBookWrapper>
      <Button
        style={{ alignSelf: "flex-start" }}
        onClick={() => history.push("/books")}
      >
        Назад
      </Button>
      <label>
        {currentBook?.title}
        <input value={title} onChange={changeTitle} />
      </label>
      <select onChange={changeAuthor} value={selectAuthor}>
        {dataAuthors.map((el) => {
          return <option value={el.id}>{el.last_name}</option>;
        })}
      </select>
      <label>
        {currentBook?.created_at}
        <input value={isYear} onChange={changeYear} />
      </label>
      <button onClick={editBooks}>Отредактировать</button>
    </EditBookWrapper>
  );
};
