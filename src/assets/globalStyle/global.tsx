import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  outline: none;
}
body {
  background-color: #FFC0CB;
  font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
li{
  list-style: none;
}
a {
  text-decoration: none;
}
h1, h2, h3, h4, h5, h6, p, ul {
  margin: 0;
  padding: 0;
}
`;

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  // padding: 5px;
  // background: ${({ theme }) => theme.body};
`;
