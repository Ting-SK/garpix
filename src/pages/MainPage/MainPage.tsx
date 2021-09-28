import { FC } from "react";
import { NavLink } from "react-router-dom";
import Author from "../../assets/pics/author.jpg";
import Books from "../../assets/pics/books.jpg";
import { Img, MainPageWrapper } from "./styles";

export const MainPage: FC = () => {
  return (
    <MainPageWrapper>
      <NavLink to="/books">
        <Img src={Books} alt="Books" />
      </NavLink>
      <NavLink to="/authors">
        <Img src={Author} alt="Authors" />
      </NavLink>
    </MainPageWrapper>
  );
};
