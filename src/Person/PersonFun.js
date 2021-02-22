import React from "react";
import "../style/Person.css";

const personFun = (props) => {
  let my_name = props.info["name"];
  let my_age = props.info["age"];

  console.log("Function");
  console.log(props.info);
  return (
    <div className="person">
      <p onClick={props.click}>
        The name of the frist person is {my_name} and the age is{" "}
        {props.info["age"]}
      </p>
      <input
        type="text"
        label="Insert name"
        onChange={props.change}
        value={props.info.name}
      ></input>
    </div>
  );
};

export default personFun;
