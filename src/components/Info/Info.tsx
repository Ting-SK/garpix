import { FC } from "react";
import { InfoContainer } from "./styles";

interface InfoProps {
  children: React.ReactNode;
}

export const Info: FC<InfoProps> = ({ children }) => {
  return <InfoContainer >{children}</InfoContainer>;
};
