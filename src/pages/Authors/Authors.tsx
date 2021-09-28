import { FC, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { AuthorActionTypes } from "../../redux/types/authors";
import { titleAuthors } from "../../services/data";
import { AuthorsWrapper, Table, Td, Th, Tr } from "./styles";
import { Button } from "antd";

export const Authors: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { dataAuthors } = useTypedSelector((state) => state.dataAuthors);

  const deleteAuthor = useCallback(
    (id: number): void => {
      dataAuthors.splice(
        dataAuthors.findIndex((el) => el.id === id),
        1
      );
      dispatch({
        type: AuthorActionTypes.FETCH_AUTHOR,
        payload: dataAuthors,
      });
    },
    [dataAuthors, dispatch]
  );

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
                  <Button onClick={() => history.push(`/authors/${el.id}`)}>
                    Просмотр автора
                  </Button>
                </Td>
                <Td>
                  <Button onClick={() => history.push(`/editauthor/${el.id}`)}>
                    Редактирование автора
                  </Button>
                </Td>
                <Td>
                  <Button onClick={() => deleteAuthor(el.id)}>Удаление</Button>
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
              onClick={() => history.push(`/createauthor`)}
            >
              Добавление автора
            </Button>
          </Tr>
        </tbody>
      </Table>
    </AuthorsWrapper>
  );
};
