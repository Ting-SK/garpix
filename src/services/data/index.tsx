import { IAuthor, IBook } from "../../types";

export const dataAuthors: IAuthor[] = [
  { id: 1, last_name: "Ivanov", first_name: "Ivan" },
  { id: 2, last_name: "Stepanov", first_name: "Ruslan" },
  { id: 3, last_name: "Putin", first_name: "Dmitry" },
  { id: 4, last_name: "Medvedev", first_name: "Vovan" },
];

export const dataBooks: IBook[] = [
  {
    id: 1,
    title: "Тайпскрипт для чайников, базовые основы и основы базы",
    author_id: 1,
    created_at: 2018,
    // image?: HTMLImageElement;
  },
  {
    id: 2,
    title: "Тайпскрипт для кипятильников, базовые основы и основы базы",
    author_id: 1,
    created_at: 2019,
    // image?: HTMLImageElement;
  },
  {
    id: 3,
    title: "Джаваскрипт для чайников, базовые основы и основы базы",
    author_id: 2,
    created_at: 2016,
    // image?: HTMLImageElement;
  },
  {
    id: 4,
    title: "Джаваскрипт для кипятильников, базовые основы и основы базы",
    author_id: 2,
    created_at: 2019,
    // image?: HTMLImageElement;
  },
  {
    id: 5,
    title: "Дизайн для чайников, базовые основы и основы базы",
    author_id: 3,
    created_at: 2018,
    // image?: HTMLImageElement;
  },
  {
    id: 6,
    title: "Дизайн для кипятильников, базовые основы и основы базы",
    author_id: 3,
    created_at: 2014,
    // image?: HTMLImageElement;
  },
  {
    id: 7,
    title:
      "Демократическое государство для чайников, базовые основы и основы базы",
    author_id: 4,
    created_at: 2000,
    // image?: HTMLImageElement;
  },
  {
    id: 8,
    title: "Светское государство для чайников, базовые основы и основы базы",
    author_id: 4,
    created_at: 2000,
    // image?: HTMLImageElement;
  },
];
