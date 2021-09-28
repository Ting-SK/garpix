import { Button } from "antd";
import { FC } from "react";
import { useHistory, useParams } from "react-router-dom";
import { ListInfo } from "../../components/ListInfo";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import { IBook, IParams } from "../../types";
import { CurrentBooksWrapper } from "./styles";

export const CurrentBooks: FC = () => {
  const history = useHistory();
  const params = useParams<IParams>();
  const { dataBooks } = useTypedSelector((state) => state.dataBooks);
  const { dataAuthors } = useTypedSelector((state) => state.dataAuthors);

  const currentBook: IBook | undefined = dataBooks.find(
    (el) => el.id === +params.id
  );
  return (
    <CurrentBooksWrapper>
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
      <ListInfo>
        <p>{currentBook?.title}</p>
        <p>
          {dataAuthors.map(
            (auth) => auth.id === currentBook?.author_id && auth.last_name
          )}
        </p>
        <p>
          {dataAuthors.map(
            (auth) => auth.id === currentBook?.author_id && auth.first_name
          )}
        </p>
        <p>{currentBook?.created_at}</p>
      </ListInfo>
    </CurrentBooksWrapper>
  );
};
