import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent",
    };

    this.greetHandler = this.greetHandler.bind(this);
  }

  greetHandler(str) {
    alert(`Hello ${this.state.parentName} from ${str}`);
  }

  render() {
    return (
      <div>
        <ChildComponent greet={this.greetHandler} />
      </div>
    );
  }
}

export default ParentComponent;
