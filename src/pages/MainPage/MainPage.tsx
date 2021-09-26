import { FC } from "react";
import { NavLink } from "react-router-dom";
import { MainPageWrapper } from "./styles";
import "antd/dist/antd.css";
import { Button } from "antd";
interface MainPageProps {}


export const MainPage: FC<MainPageProps> = () => {
  return (
    <MainPageWrapper>
      <NavLink to="/books">
        <Button type="primary">Books</Button>
      </NavLink>
      <NavLink to="/authors">
        <Button type="primary">Authors</Button>
      </NavLink>
    </MainPageWrapper>
  );
};
