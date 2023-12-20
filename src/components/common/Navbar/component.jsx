import React from "react";
import { Link } from "react-router-dom";

import { EQUIPMENT_PAGE, ANALYTICS_PAGE, PLANNING_PAGE, CLIENTS_PAGE } from "../../../constants";

import "./styles.css";

const Navbar = ({ className }) => {
  return (
    <div className={className}>
      <div className="nav-container">
        <Link to={"/"}>
          <div className="nav-item">Заказы</div>
        </Link>
        <Link to={EQUIPMENT_PAGE}>
          <div className="nav-item">Инвентарь</div>
        </Link>
        <Link to={PLANNING_PAGE}>
          <div className="nav-item">Планирование</div>
        </Link>
        <Link to={ANALYTICS_PAGE}>
          <div className="nav-item">Аналитика</div>
        </Link>
        <Link to={CLIENTS_PAGE}>
          <div className="nav-item">Клиенты</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
