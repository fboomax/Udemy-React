import React, { Component } from "react";
import { render } from "@testing-library/react";
import "../style/Person.css";

class personComponent extends Component {
  state = this.props.info;
  // her_age = 29;
  // her_name = this.props.name;
  // setState(
  //     {
  //       name: this.props.info.name,
  //       age: this.props.info.age,
  //     },
  // );
  render() {
    console.log("Class");
    console.log("state");
    console.log(this.state);
    console.log("props");
    console.log(this.props.info);
    return (
      <div className="person">
        <p>
          The name of my love is {this.props.info.name} and her age is{" "}
          {this.props.info.age}
        </p>
      </div>
    );
  }
}

export default personComponent;
