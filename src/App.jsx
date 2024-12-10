import React from "react";
import Navbar from "./components/Navbar";
import { Tabs } from "./components/Tabs";
import { Header } from "./components/header";
import "./App.css";
import { Table } from "./Table";
const App = () => {
  return (
    <div>
      <div className="text-center">
          <Navbar/>
          <Tabs/>
          <Header/>    
          <Table/>
      </div>
    </div>
  );
};

export default App;
