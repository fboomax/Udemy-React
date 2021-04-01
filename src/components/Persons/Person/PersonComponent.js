import React, { Component } from "react";
import { render } from "@testing-library/react";
import "../../../style/Person.css";

class personComponent extends Component {
  render() {
    console.log("[PersonComponent.js] rendering");
    return (
      <div className="person">
        aek
        <p onClick={this.props.click}>
          The name of the second person is {this.props.info.name} and her age is{" "}
          {this.props.info.age}
        </p>
      </div>
    );
  }
}

export default personComponent;
