import { FC } from "react";
import { AppWrapper, GlobalStyle } from "./assets/globalStyle/global";
import { Header } from "./components/Header";
import { useFetchData } from "./hooks/useFetchData";
import { Routes } from "./navigation/routes";
import "antd/dist/antd.css";

interface AppProps {}

export const App: FC<AppProps> = () => {
  useFetchData();
  return (
    <AppWrapper>
      <GlobalStyle />
      <Header />
      <Routes />
    </AppWrapper>
  );
};
