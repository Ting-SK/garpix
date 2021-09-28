import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { AuthorActionTypes } from "../../redux/types/authors";
import { AuthorsWrapper, Table, Td, Th, Tr } from "./styles";

interface AuthorsProps {}

export const titleAuthors = [
  "Фамилия автора",
  "Имя автора",
  "Ссылка на просмотр автора",
  "Ссылка на редактирование автора",
  "Кнопка удаления автора",
];

export const Authors: FC<AuthorsProps> = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { dataAuthors } = useTypedSelector((state) => state.dataAuthors);

  const deleteAuthor = (id: number) => {
    let index = dataAuthors.findIndex((el) => el.id === id);
    dataAuthors.splice(index, 1);
    dispatch({
      type: AuthorActionTypes.FETCH_AUTHOR,
      payload: dataAuthors,
    });
  };

  return (
    <AuthorsWrapper>
      <Table>
        <thead>
          <Tr>
            {titleAuthors.map((el) => {
              return <Th key={el}>{el}</Th>;
            })}
          </Tr>
        </thead>
        <tbody>
          {dataAuthors.map((el) => {
            return (
              <Tr key={el.id}>
                <Td>{el.last_name}</Td>
                <Td>{el.first_name}</Td>
                <Td>
                  <button onClick={() => history.push(`/authors/${el.id}`)}>
                    Просмотр
                  </button>
                </Td>
                <Td>
                  <button onClick={() => history.push(`/edit/${el.id}`)}>
                    Редактирование
                  </button>
                </Td>
                <Td>
                  <button onClick={() => deleteAuthor(el.id)}>Удаление</button>
                </Td>
              </Tr>
            );
          })}
          <Tr>
            <Td>
              <button onClick={() => history.push(`/create`)}>
                Добавление автора
              </button>
            </Td>
          </Tr>
        </tbody>
      </Table>
    </AuthorsWrapper>
  );
};
