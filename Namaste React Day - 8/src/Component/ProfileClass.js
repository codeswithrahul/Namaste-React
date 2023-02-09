// we are going to write class based component
// render method return some jsx
// we can manage state like this : -
import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  render() {
    const { count } = this.state;
    return (
      <>
        <h1>This is Profile class component</h1>
        <h2>{count}</h2>
        <button
          onClick={() => {
            this.setState({ count1: 1 });
          }}
        ></button>
      </>
    );
  }
}

export default ProfileClass;
