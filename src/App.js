import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather />
      <p>
        <a
          href="https://github.com/ahnseri/react-import-project"
          target="_blank"
        >
          Open-source code on GitHub
        </a>{" "}
        by Sherry-Anne Yu
      </p>
    </div>
  );
}

export default App;
