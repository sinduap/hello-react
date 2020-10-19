import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  render() {
    console.log("Pure Component Render");
    return <div>Pure Component {this.props.name}</div>;
  }
}

export default PureComp;

// Pure component compare new state to existing state,
// if there any shallow comparison, then its never re render
// hence boosting performance
