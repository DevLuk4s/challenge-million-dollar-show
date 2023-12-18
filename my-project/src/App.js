//CSS
import "./App.css";

//Components
import Home from "./components/Home";

//Hooks
import { useCallback, useEffct, useState } from "react";

//Dados
import { data } from "./data/words";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
