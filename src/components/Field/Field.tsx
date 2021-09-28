import React, { FC } from "react";
import { FieldContainer } from "./styles";

interface FieldProps {
  children: React.ReactNode;
}

export const Field: FC<FieldProps> = ({ children }) => {
  return <FieldContainer>{children}</FieldContainer>;
};
