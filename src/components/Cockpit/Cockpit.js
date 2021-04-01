import React from "react";

const Cockpit = (props) => {
  return (
    <div>
      <h1>{props.theTitle}</h1>
      <button className="menuButton" onClick={props.clicked}>
        Show me the Pepple
      </button>
    </div>
  );
};

export default Cockpit;
