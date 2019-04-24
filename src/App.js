import React from "react";
import "./App.css";
import { CurrentTabProvider } from "./Tab.context";
import { Tab } from "./Tab.js";

function App() {
  return (
    <div className="App">
      <CurrentTabProvider>
        <Tab>Test</Tab>
      </CurrentTabProvider>
    </div>
  );
}

export default App;
