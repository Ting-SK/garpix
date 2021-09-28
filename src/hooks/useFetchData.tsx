import { useEffect } from "react";
import { useActions } from "./useActions";

export const useFetchData = () => {
  const { fetchAuthors, fetchBooks } = useActions();
  useEffect(() => {
    fetchAuthors();
    fetchBooks();
  });
};
