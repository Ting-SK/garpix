import { FC, useEffect } from "react";
import "antd/dist/antd.css";

import { BooksWrapper, Table, Td, Th, Tr } from "./styles";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { IBook } from "../../types";

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
  const { fetchBooks } = useActions();

  useEffect(() => {
    fetchBooks();
  }, [dataBooks]);

 
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
                <Td>Автор</Td>
                <Td>Автор</Td>
                <Td>{el.created_at}</Td>
                <Td>
                  <button>Ссылка на просмотр</button>
                </Td>
                <Td>
                  <button>Редактирование</button>
                </Td>
                <Td>
                  <button>Удаление книги</button>
                </Td>
                <Td>
                  <button>Создание книги</button>
                </Td>
              </Tr>
            );
          })}
        </tbody>
      </Table>
    </BooksWrapper>
  );
};
