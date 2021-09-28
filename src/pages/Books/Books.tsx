import { FC } from "react";
import "antd/dist/antd.css";

import { BooksWrapper, Table, Td, Th, Tr } from "./styles";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useHistory } from "react-router";
import { BooksActionTypes } from "../../redux/types/books";
import { useDispatch } from "react-redux";

interface BooksProps {}

export const titleBooks = [
  "Название книги",
  "Фамилия автора",
  "Имя автора",
  "Первая публикация",
  "Ссылка на просмотр книги",
  "Ссылка на редактирование книги",
  "Кнопка удаления книги",
  "Кнопка создания книги",
];

export const Books: FC<BooksProps> = () => {
  const { dataBooks } = useTypedSelector((state) => state.dataBooks);
  const { dataAuthors } = useTypedSelector((state) => state.dataAuthors);
  const history = useHistory();
  const dispatch = useDispatch();
  const deleteBook = (id: number) => {
    let index = dataBooks.findIndex((el) => el.id === id);
    dataBooks.splice(index, 1);
    dispatch({
      type: BooksActionTypes.FETCH_BOOKS,
      payload: dataBooks,
    });
  };

  return (
    <BooksWrapper>
      <Table>
        <thead>
          <Tr>
            {titleBooks.map((el) => {
              return <Th>{el}</Th>;
            })}
          </Tr>
        </thead>
        <tbody>
          {dataBooks.map((el) => {
            return (
              <Tr>
                <Td>{el.title}</Td>
                <Td>
                  {dataAuthors.map(
                    (auth) =>
                      auth.id === el.author_id && <Td>{auth.last_name}</Td>
                  )}
                </Td>
                <Td>
                  {dataAuthors.map(
                    (auth) =>
                      auth.id === el.author_id && <Td>{auth.first_name}</Td>
                  )}
                </Td>
                <Td>{el.created_at}</Td>
                <Td>
                  <button onClick={() => history.push(`/books/${el.id}`)}>
                    Ссылка на просмотр
                  </button>
                </Td>
                <Td>
                  <button onClick={() => history.push(`/editbook/${el.id}`)}>
                    Редактирование
                  </button>
                </Td>
                <Td>
                  <button onClick={() => deleteBook(el.id)}>
                    Удаление книги
                  </button>
                </Td>
              </Tr>
            );
          })}
          <Tr>
            {" "}
            <button onClick={() => history.push(`/createbook`)}>
              Создание книги
            </button>
          </Tr>
        </tbody>
      </Table>
    </BooksWrapper>
  );
};
