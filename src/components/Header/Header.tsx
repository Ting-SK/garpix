import { FC } from "react";
import { Link } from "react-router-dom";
import { HeaderWrapper } from "./styles";

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <HeaderWrapper>
      <Link to="/">На главную</Link>
    </HeaderWrapper>
  );
};
