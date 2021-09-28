import { FC } from "react";
import { ListInfoWrapper } from "./styles";

interface ListInfoProps {
  children: React.ReactNode;
}

export const ListInfo: FC<ListInfoProps> = ({ children }) => {
  return <ListInfoWrapper>{children}</ListInfoWrapper>;
};
