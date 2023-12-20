import React from "react";

import BasicLayout from "../../common/BasicLayout";
import Table from "./Table";

import './styles.css'

const Clients = () => {
  return (
    <BasicLayout>
      <div className="clientsWrapper">
        <Table />
      </div>
    </BasicLayout>
  );
};

export default Clients;
