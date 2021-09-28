import styled from "styled-components";

export const BooksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;

export const Table = styled.table`
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
  position: relative;
  background-color: rgba(255, 255, 255, 0.2);
  color: #000;
  text-align: ${({ onClick }) => (onClick ? "center" : "left")};
  background: ${({ onClick }) => (onClick ? "rgba(255, 255, 255, 0.5)" : " ")};
  cursor: ${({ onClick }) => (onClick ? "pointer" : " ")};
`;
export const Tr = styled.tr`
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;
