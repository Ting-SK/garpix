import { FC, useEffect } from "react";
import { useHistory } from "react-router";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
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

  const { dataAuthors } = useTypedSelector((state) => state.dataAuthors);
  const { fetchAuthors } = useActions();

  useEffect(() => {
    fetchAuthors();
  }, []);

  return (
    <AuthorsWrapper>
      <Table>
        <thead>
          <Tr>
            {titleAuthors.map((el) => {
              return <Th>{el}</Th>;
            })}
          </Tr>
        </thead>
        <tbody>
          {dataAuthors.map((el) => {
            return (
              <Tr>
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
                  <button>Удаление</button>
                </Td>
              </Tr>
            );
          })}
          <Tr>
            {" "}
            <Td>
              <button>Добавление автора</button>
            </Td>
          </Tr>
        </tbody>
      </Table>
    </AuthorsWrapper>
  );
};
