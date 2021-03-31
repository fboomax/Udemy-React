import React, { Component } from "react";
import { render } from "@testing-library/react";
import "../../../style/Person.css";

class personComponent extends Component {
  state = this.props.info;

  render() {
    return (
      <div className="person">
        <p onClick={this.props.click}>
          The name of the second person is {this.props.info.name} and her age is{" "}
          {this.props.info.age}
        </p>
      </div>
    );
  }
}

export default personComponent;
