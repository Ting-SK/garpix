import { FC } from "react";
import { Link } from "react-router-dom";
import { HeaderWrapper, LinkStyle } from "./styles";

export const Header: FC = () => {
  return (
    <HeaderWrapper>
      <Link to="/garpix">
        <LinkStyle>На главную</LinkStyle>
      </Link>
    </HeaderWrapper>
  );
};
