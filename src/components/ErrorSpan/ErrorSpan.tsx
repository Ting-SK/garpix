import { FC } from "react";
import { ErrorSpanContainer } from "./styles";

interface ErrorSpanProps {
  children: React.ReactNode;
}

export const ErrorSpan: FC<ErrorSpanProps> = ({ children }) => {
  return <ErrorSpanContainer>{children}</ErrorSpanContainer>;
};
