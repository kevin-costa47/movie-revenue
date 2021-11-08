

import React from "react";
import "../Modal.css";

const YearModal = props => {
    const { years } = props;

    return(
      <div className="yearDiv">
      <span className="yearHeader">Select a year</span>
      {years.reverse().map((year) => { return  <span className="yearText">{year}</span> })}
    </div>
    )
}

export default YearModal;