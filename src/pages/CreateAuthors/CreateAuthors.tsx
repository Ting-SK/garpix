import { FC, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { AuthorActionTypes } from "../../redux/types/authors";
import { IAuthor, IParams } from "../../types";
import { CreateAuthorsWrapper } from "./styles";

interface CreateAuthorsProps {}

export const CreateAuthors: FC<CreateAuthorsProps> = () => {
  const [newName, setNewName] = useState<string>("");
  const [newSurname, setNewSurname] = useState<string>("");

  const history = useHistory();
  const params = useParams<IParams>();
  const dispatch = useDispatch();

  const { dataAuthors } = useTypedSelector((state) => state.dataAuthors);

  let currentAuthor: IAuthor | undefined = dataAuthors.find(
    (el) => el.id === +params.id
  );

  console.log(currentAuthor);

  const changeName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setNewName(e.target.value);
    },
    [setNewName]
  );

  const changeSurname = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setNewSurname(e.target.value);
    },
    [setNewSurname]
  );

  const createAuthor = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { id } = dataAuthors[dataAuthors.length - 1];
    console.log(id);
    let newAuthor: IAuthor = {
      first_name: newName,
      last_name: newSurname,
      id: id + 1,
    };
    dataAuthors.push(newAuthor);
    dispatch({
      type: AuthorActionTypes.FETCH_AUTHOR,
      payload: dataAuthors,
    });
    console.log(newAuthor);
    console.log(dataAuthors);
    history.push("../authors");
  };

  return (
    <CreateAuthorsWrapper>
      <label>
        Новое имя
        <input value={newName} onChange={changeName} />
      </label>
      <label>
        Новая Фамилия
        <input value={newSurname} onChange={changeSurname} />
      </label>
      <button onClick={createAuthor}>Добавить</button>
    </CreateAuthorsWrapper>
  );
};
