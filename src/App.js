import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Orders from "./components/pages/Orders";
import Equipment from "./components/pages/Equipment";
import Planing from "./components/pages/Planning";
import Clients from "./components/pages/Clients";
import Analytics from "./components/pages/Analytics";
import PrivateRoute from "./components/blocks/PrivateRoute";

import { EQUIPMENT_PAGE, ANALYTICS_PAGE, PLANNING_PAGE, CLIENTS_PAGE } from "./constants";
import "./index.css";
import Auth from "./components/pages/Auth";

const App = () => {
  return (
    <div className="rootWrapper">
      <Router>
        <Routes>
          {/* <Route path="/" element={<Orders />} /> */}
          <Route exact path="/" element={<PrivateRoute />}>
            <Route exact path="/" element={<Orders />} />
          </Route>
          <Route exact path={EQUIPMENT_PAGE} element={<PrivateRoute />}>
            <Route exact path={EQUIPMENT_PAGE} element={<Equipment />} />
          </Route>
          <Route exact path={PLANNING_PAGE} element={<PrivateRoute />}>
            <Route path={PLANNING_PAGE} element={<Planing />} />
          </Route>
          <Route exact path={ANALYTICS_PAGE} element={<PrivateRoute />}>
            <Route path={ANALYTICS_PAGE} element={<Analytics />} />
          </Route>
          <Route exact path={CLIENTS_PAGE} element={<PrivateRoute />}>
            <Route path={CLIENTS_PAGE} element={<Clients />} />
          </Route>
          <Route path={"/auth"} element={<Auth />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
