import React from "react";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Orders from "./components/pages/Orders";
import Equipment from "./components/pages/Equipment"
import Planing from "./components/pages/Planning";
import Clients from "./components/pages/Clients";
import Analytics from "./components/pages/Analytics";

import { EQUIPMENT_PAGE, ANALYTICS_PAGE, PLANNING_PAGE, CLIENTS_PAGE } from "./constants";
import "./index.css";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Orders/>}/>
          <Route path={EQUIPMENT_PAGE} element={<Equipment/>}/>
          <Route path={PLANNING_PAGE} element={<Planing/>}/>
          <Route path={ANALYTICS_PAGE} element={<Analytics/>}/>
          <Route path={CLIENTS_PAGE} element={<Clients/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
