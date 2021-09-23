import { render } from "react-dom";
import {App} from "./App";

const root = document.querySelector("#root");
const appRender = () => {
  render(<App />, root);
};
appRender();
