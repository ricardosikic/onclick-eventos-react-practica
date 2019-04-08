import React from "react";
import ReactDOM from "react-dom";
import { PrimerComponente } from "./componentes/componente1";
import { ComponenteDos } from "./componentes/componente2";
import { ComponenteTres } from "./componentes/componente3";
import { ComponenteCuatro } from "./componentes/componente4";

import "./styles.css";

function App() {
  return (
    <div>
      <PrimerComponente />
      <ComponenteDos />
      <ComponenteTres />
      <ComponenteCuatro />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
