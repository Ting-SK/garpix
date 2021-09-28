import { FC } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button } from "antd";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { ListInfo } from "../../components/ListInfo";
import { Info } from "../../components/Info";
import { TitlePage } from "../../components/TitlePage";

import { CurrentAuthorsWrapper, Label } from "./styles";
import "antd/dist/antd.css";

import { IAuthor, IParams } from "../../types";

export const CurrentAuthors: FC = () => {
  const history = useHistory();
  const params = useParams<IParams>();
  const { dataAuthors } = useTypedSelector((state) => state.dataAuthors);

  const currentAuthor: IAuthor | undefined = dataAuthors.find(
    (el: IAuthor): boolean => el.id === +params.id
  );

  return (
    <CurrentAuthorsWrapper>
      <Button
        style={{
          position: "absolute",
          top: "40px",
          left: "40px",
          alignSelf: "flex-start",
        }}
        onClick={() => history.push("/authors")}
      >
        Назад
      </Button>
      <TitlePage>Просмотр автора</TitlePage>
      <ListInfo>
        <Label>Имя</Label>
        <Info>{currentAuthor?.first_name}</Info>
        <Label>Фамилия</Label>
        <Info>{currentAuthor?.last_name}</Info>
      </ListInfo>
    </CurrentAuthorsWrapper>
  );
};
