import { FC } from "react";
import { useHistory } from "react-router";

import { Button } from "antd";
import { ListInfo } from "../../components/ListInfo";

import { EditBookWrapper } from "./styles";
import { EditCreateBook } from "../../containers/EditCreateBook";
import { TitlePage } from "../../components/TitlePage";

export const EditBook: FC = () => {
  const history = useHistory();

  return (
    <EditBookWrapper>
      <Button
        style={{
          position: "absolute",
          top: "40px",
          left: "40px",
          alignSelf: "flex-start",
        }}
        onClick={() => history.push("/books")}
      >
        Назад
      </Button>
      <TitlePage>Отредактировать книгу</TitlePage>
      <ListInfo>
        <EditCreateBook />
      </ListInfo>
    </EditBookWrapper>
  );
};
