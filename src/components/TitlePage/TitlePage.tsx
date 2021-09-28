import React, { FC } from "react";
import { TitlePageContainer } from "./styles";

interface TitlePageProps {
  children: React.ReactNode;
}

export const TitlePage: FC<TitlePageProps> = ({ children }) => {
  return <TitlePageContainer>{children}</TitlePageContainer>;
};
