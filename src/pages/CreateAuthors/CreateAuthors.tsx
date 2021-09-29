import { FC } from "react";
import { useHistory } from "react-router";
import { Button } from "antd";

import { TitlePage } from "../../components/TitlePage";
import { ListInfo } from "../../components/ListInfo";

import { CreateAuthorsWrapper } from "./styles";
import { EditCreateAuthor } from "../../containers/EditCreateAuthor";

export const CreateAuthors: FC = () => {
  const history = useHistory();

  return (
    <CreateAuthorsWrapper>
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
      <TitlePage>Создать автора</TitlePage>
      <ListInfo>
        <EditCreateAuthor create/>
      </ListInfo>
    </CreateAuthorsWrapper>
  );
};
