import { FC, useEffect } from "react";
import { AppWrapper, GlobalStyle } from "./assets/globalStyle/global";
import { Header } from "./components/Header";
import { useActions } from "./hooks/useActions";
import { Routes } from "./navigation/routes";

interface AppProps {}

export const App: FC<AppProps> = () => {
  const { fetchAuthors } = useActions();
  useEffect(() => {
    fetchAuthors();
  }, []);
  return (
    <AppWrapper>
      <GlobalStyle />
      <Header />
      <Routes />
    </AppWrapper>
  );
};
