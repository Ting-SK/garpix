import { FC } from "react";
import { IAuthor } from "../../types";

interface EditBtnProps {
  author: IAuthor;
  onClick: (author: IAuthor) => void;
}

export const EditBtn: FC<EditBtnProps> = ({ author, onClick }) => {
  return <div onClick={() => onClick(author)}>Редактировать</div>;
};
