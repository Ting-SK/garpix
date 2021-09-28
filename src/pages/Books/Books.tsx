import { FC, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Button } from "antd";
import { titleBooks } from "../../services/data";

import { BooksWrapper, Table, Td, Th, Tr } from "./styles";
import { BooksActionTypes } from "../../redux/types/books";
import { IAuthor, IBook } from "../../types";

export const Books: FC = () => {
  const { dataBooks } = useTypedSelector((state) => state.dataBooks);
  const { dataAuthors } = useTypedSelector((state) => state.dataAuthors);

  const history = useHistory();
  const dispatch = useDispatch();

  const deleteBook = useCallback(
    (id: number) => {
      dataBooks.splice(
        dataBooks.findIndex((el) => el.id === id),
        1
      );
      dispatch({
        type: BooksActionTypes.FETCH_BOOKS,
        payload: dataBooks,
      });
    },
    [dataBooks, dispatch]
  );

  return (
    <BooksWrapper>
      <Table>
        <thead>
          <Tr>
            {titleBooks.map((title: string): JSX.Element => {
              return <Th>{title}</Th>;
            })}
          </Tr>
        </thead>
        <tbody>
          {dataBooks.map((book: IBook): JSX.Element => {
            return (
              <Tr>
                <Td>{book.title}</Td>
                <Td>
                  {dataAuthors.map(
                    (author: IAuthor): boolean | JSX.Element =>
                      author.id === book.author_id && (
                        <Td>{author.last_name}</Td>
                      )
                  )}
                </Td>
                <Td>
                  {dataAuthors.map(
                    (author: IAuthor): boolean | JSX.Element =>
                      author.id === book.author_id && (
                        <Td>{author.first_name}</Td>
                      )
                  )}
                </Td>
                <Td>{book.created_at}</Td>
                <Td>
                  <Button onClick={() => history.push(`/books/${book.id}`)}>
                    Ссылка на просмотр
                  </Button>
                </Td>
                <Td>
                  <Button onClick={() => history.push(`/editbook/${book.id}`)}>
                    Редактирование
                  </Button>
                </Td>
                <Td>
                  <Button onClick={() => deleteBook(book.id)}>
                    Удаление книги
                  </Button>
                </Td>
              </Tr>
            );
          })}
          <Tr
            style={{
              textAlign: "center",
            }}
          >
            <Button
              type="primary"
              style={{
                width: "100%",
                height: "60px",
                borderRadius: "10px",
              }}
              onClick={() => history.push(`/createbook`)}
            >
              Создать новую книгу
            </Button>
          </Tr>
        </tbody>
      </Table>
    </BooksWrapper>
  );
};
