import React from "react";
import Navbar from "./components/Navbar";
import { Tabs } from "./components/Tabs";
import "./App.css";

const App = () => {
  return (
    <div>
      <div className="text-center">
        <Navbar />
        <Tabs />
      </div>
    </div>
  );
};

export default App;
