import { StrictMode } from "react";
import ReactDOM from "react-dom";

import FunctionComponent from "./FunctionComponent";
import ClassComponent from "./ClassComponent";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <div>
      <h3> Function component </h3>
      <FunctionComponent />
      <h3> Class component </h3>
      <ClassComponent />
    </div>
  </StrictMode>,
  rootElement
);
