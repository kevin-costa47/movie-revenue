import React,{Fragment}from "react";
import TableData from "./tabledata/TableData";
import "./Home.css";

const Home = () => {
  return (
    <Fragment>
      <div  className="table_header">
        <h1>RANKING</h1>
        <h1>TITLE</h1>
        <h1>YEAR</h1>
        <h1>REVENUE</h1>
      </div>
      <div className="table_data">
        <TableData/>
      </div>
    </Fragment>
  );
};

export default Home;
