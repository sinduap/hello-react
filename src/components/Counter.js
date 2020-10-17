import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  //   increment = () => {
  //     this.setState({
  //       counter: this.state.counter + 1,
  //     });
  //   };

  increment = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  incrementByFive = () => {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  };

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <div>{this.state.counter}</div>
        <button onClick={this.increment}>+</button>
        <button onClick={this.incrementByFive}>+5</button>
      </div>
    );
  }
}

export default Counter;
