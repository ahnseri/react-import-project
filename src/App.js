import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        <a
          href="https://github.com/ahnseri/react-import-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source code on GitHub
        </a>{" "}
        by Sherry-Anne Yu
      </footer>
    </div>
  );
}

export default App;
