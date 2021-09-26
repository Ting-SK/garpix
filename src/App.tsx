import { FC } from "react";
import { AppWrapper, GlobalStyle } from "./assets/globalStyle/global";
import { Header } from "./components/Header";
import { Routes } from "./navigation/routes";

interface AppProps {}

export const App: FC<AppProps> = () => {
  return (
    <AppWrapper>
      <GlobalStyle />
      <Header />
      <Routes />
    </AppWrapper>
  );
};
