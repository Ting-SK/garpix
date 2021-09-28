import { Button } from "antd";
import { FC } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IAuthor, IParams } from "../../types";
import { CurrentAuthorsWrapper } from "./styles";

interface CurrentAuthorsProps {}
export const CurrentAuthors: FC<CurrentAuthorsProps> = () => {
  const history = useHistory();
  const params = useParams<IParams>();
  const { dataAuthors } = useTypedSelector((state) => state.dataAuthors);

  const currentAuthor: IAuthor | undefined = dataAuthors.find(
    (el) => el.id === +params.id
  );
  return (
    <CurrentAuthorsWrapper>
      <Button
        style={{ alignSelf: "flex-start" }}
        onClick={() => history.push("/authors")}
      >
        Назад
      </Button>
      <div>
        <p>
          {currentAuthor?.first_name} {currentAuthor?.last_name}
        </p>
      </div>
    </CurrentAuthorsWrapper>
  );
};
