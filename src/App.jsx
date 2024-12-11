import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { Tabs } from "./components/Tabs";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import "./App.css";
import axios from "axios";
import SportsData from "./components/SportsData";
import { Table } from "./Table";
const App = () => {
  return (
    <div>
      <div className="text-center">
        <Navbar />
        <Tabs />
        <Header />
        <SportsData />
        <Footer />
      </div>
    </div>
  );
};

export default App;
