import React, { FC, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
// import { AuthorActionTypes } from "../../redux/types/authors";
import { IBook, IParams } from "../../types";
import { CreateBookWrapper } from "./styles";
import { Button } from "antd";
import { BooksActionTypes } from "../../redux/types/books";

export const CreateBook: FC = () => {
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

  const editBooks = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
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
  }, []);

  return (
    <CreateBookWrapper>
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
    </CreateBookWrapper>
  );
};
