# Garpix -  Тестовое задание на вакансию фронтенд-разработчика на React (мидл)

## Цель:
Создание SPA приложение на React.js с SSR, роутингом, CRUD.
В приложении обязательно должен быть реализован роутинг через html5 history api (не через хэши #!), CRUD, адаптивная верстка (можно использовать Bootstrap или любой другой css-фреймворк).
Результат выложить на github.com или архивом прислать ссылку на репозиторий на почту.
Приложение должно устанавливаться с помощью команды npm install (или yarn) и запускаться командой npm start (или yarn). Это необходимо для проверки работоспособности приложения.

## Описание приложения:
Приложение представляет собой виртуальную библиотеку. Есть два типа данных - Автор и Книга. Каждая Книга должна быть привязана к конкретному Автору (только одному). В приложении должна быть возможность создания, просмотра, изменения, удаления Книг и Авторов.

#### В Книге должны быть следующие поля:
- ID (id), число
- Название книги (title), строка
- Автор (author_id), внешний ключ
- Дата добавления книги (created_at), число
- Первая публикация (year), число
- Обложка книги (image), изображение base64, необязательное

#### В Авторе должны быть следующие поля:
- ID (id), число
- Фамилия (last_name), строка
- Имя (first_name), строка

Данные формирует сам кандидат.

## Структура приложения:
Меню:
- Верхнее меню
- Главная страница
- Книги
- Авторы  
Страницы и их содержимое:
- Главная страница
- Ссылка на страницу "Книги"
- Ссылка на страницу "Авторы"
Книги  
Список книг в виде таблицы, отображаются поля
- "Название книги"
- "Фамилия автора"
- "Имя автора"
- "Первая публикация"
- Ссылка на просмотр книги
- Ссылка на редактирование книги
- Кнопка удаления книги
- Кнопка создания книги
Просмотр книги, отображаются поля
- "Название книги"
- "Фамилия автора"
- "Имя автора"
- "Первая публикация"
- «Обложка книги»
Редактирование книги, возможность отредактировать поля
- "Название книги"
- Select для выбора автора
- "Первая публикация"
- «Обложка книги»  
!!! Для полей обязательна HTML5 валидация данных по типу данных
Создание книги (поля аналогичны редактированию книги)


## Авторы
Список авторов в виде таблицы, отображаются поля
"Фамилия автора"
"Имя автора"
Ссылка на просмотр автора
Ссылка на редактирование автора
Кнопка удаления автора
Кнопка создания автора
Просмотр автора, отображаются поля
"Фамилия автора"
"Имя автора"
Редактирование автора, возможность отредактировать поля
"Фамилия автора"
"Имя автора"
!!! Для полей обязательна HTML5 валидация данных по типу данных
Создание автора (поля аналогичны редактированию автора)


## Дополнительно:
Реализовать SSR для данного проекта (обрабатывать только чтение).
Данные сохранять в localstorage.
Осуществить защиту от XSS.
Разрешается использовать любые дополнительные npm-модули (redux и т.п.).

На основе тестового задания выделяем следующие навыки кандидата:
* Правильность архитектуры проекта.
* Правильность работы проекта.
* Знание JavaScript.
* Понимание React.
* Умение работы с внешними системами.
* Умение писать автотесты.
* Умение читать задание.
* Аккуратность вывода данных для пользователя

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
