import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import { ErrorSpan } from "../../components/ErrorSpan";
import { Field } from "../../components/Field";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { BooksActionTypes } from "../../redux/types/books";
import { IBook, IParams } from "../../types";

interface EditCreateBookProps {
  create?: boolean;
}

export const EditCreateBook: FC<EditCreateBookProps> = ({ create }) => {
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
      if (!(typeof e.target.value === "number")) {
        setIsYearError("Введите число");
      } else {
        setIsYearError("");
      }
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
    },
    [dataBooks, dispatch, history, isYear, params.id, selectAuthor, title]
  );

  const createBook = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const { id } = dataBooks[dataBooks.length - 1];
      let year = parseInt(isYear.slice(0, 4));
      let newBook: IBook = {
        id: id + 1,
        title: title,
        created_at: year,
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
          type="date"
          onChange={(e) => changeIsYear(e)}
          onBlur={(e) => blurHandler(e)}
          placeholder="Укажите год публикации"
        />
        {isYearDirty && isYearError && <ErrorSpan>{isYearError}</ErrorSpan>}
      </label>
      {create ? (
        <button disabled={!formValid} onClick={editBooks}>
          Отредактировать
        </button>
      ) : (
        <button disabled={!formValid} onClick={createBook}>
          Добавить
        </button>
      )}
    </Field>
  );
};
