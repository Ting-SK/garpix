import { FC } from "react";
import { useHistory } from "react-router-dom";

import { Button } from "antd";
import { ListInfo } from "../../components/ListInfo";

import { CreateBookWrapper } from "./styles";
import { EditCreateBook } from "../../containers/EditCreateBook";
import { TitlePage } from "../../components/TitlePage";

export const CreateBook: FC = () => {
  const history = useHistory();

  return (
    <CreateBookWrapper>
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
      <TitlePage>Добавить книгу</TitlePage>
      <ListInfo>
        <EditCreateBook create />
      </ListInfo>
    </CreateBookWrapper>
  );
};
