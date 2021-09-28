import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 60px;
  background: #ff99ff;
  width: 100%;
`;

export const LinkStyle = styled.span`
  font-size: 18px;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  transition: color 1s;
  color: #fff;
  &:hover {
    color: #99ccff;
    transition: color 1s;
  }
`;
