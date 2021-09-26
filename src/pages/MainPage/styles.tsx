import styled from "styled-components";

export const MainPageWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
  border: 1px solid #000;
  border-radius: 20px;
  color: #000;
  font-weight: bold;
  font-size: 12px;
  box-shadow: 0 6px 0px #3c354a;
  text-align: center;
  letter-spacing: 2px;
  position: relative;
  top: 0;
  margin: 20px 0;
  &:hover {
    top: 4px;
    box-shadow: 0 4px 0px #3c354a;
  }
  &:active {
    top: 2px;
    box-shadow: 0 2px 0px #3c354a;
  }
`;
