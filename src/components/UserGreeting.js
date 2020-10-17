import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogIn: true,
    };
  }

  // APPROACH #1
  /*
  render() {
    if (this.state.isLogIn) {
      return (
        <div>
          <div>Welcome Sindu</div>
        </div>
      );
    } else {
    }
    return (
      <div>
        <div>Welcome Guest</div>
      </div>
    );
  }
  */

  // APPROACH #2
  /*
  render() {
    let message;
    if (this.state.isLogIn) {
      message = <div>Welcome Sindu</div>;
    } else {
      message = <div>Welcome Guest</div>;
    }
    return <div>{message}</div>;
  }
  */

  // APPROACH #3 (BEST)
  /*
  render() {
    return this.state.isLogIn ? (
      <div>Welcome Sindu</div>
    ) : (
      <div>Welcome guess</div>
    );
  }
  */

  // APPROACH 4
  render() {
    return this.state.isLogIn && <div>Welcome Sindu</div>;
  }
}

export default UserGreeting;
