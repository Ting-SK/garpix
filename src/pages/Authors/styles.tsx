import styled from "styled-components";

export const AuthorsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Table = styled.table`
  width: 800px;
  border-collapse: collapse;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;
export const Th = styled.th`
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;
  text-align: left;
  background-color: #55608f;
`;
export const Td = styled.td`
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.2);
  color: #000;
  position: relative;
  &:hover {
    &:before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: -9999px;
      bottom: -9999px;
      background-color: rgba(255, 255, 255, 0.2);
      z-index: -1;
    }
  }
`;
export const Tr = styled.tr`
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;
