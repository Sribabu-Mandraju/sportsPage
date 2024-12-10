import React from "react";
import Navbar from "./components/Navbar";
import { Tabs } from "./components/Tabs";
import { Header } from "./components/header";
import "./App.css";

const App = () => {
  return (
    <div>
      <div className="text-center">
          <Navbar/>
          <Tabs/>
          <Header/>    
      </div>
    </div>
  );
};

export default App;
