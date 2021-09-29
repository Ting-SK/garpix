import { FC } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "antd";

import { ListInfo } from "../../components/ListInfo";
import { TitlePage } from "../../components/TitlePage";

import { EditAuthorsWrapper } from "./styles";
import { EditCreateAuthor } from "../../containers/EditCreateAuthor";

export const EditAuthors: FC = () => {
  const history = useHistory();

  return (
    <EditAuthorsWrapper>
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
      <TitlePage>Редактировать автора</TitlePage>
      <ListInfo>
        <EditCreateAuthor />
      </ListInfo>
    </EditAuthorsWrapper>
  );
};
