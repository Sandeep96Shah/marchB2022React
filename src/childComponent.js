import React from "react";
import GrandChildComponent from "./GrandChildComponent";

class ChildComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      name1: "Ram",
      name2: "Sita",
    };
  }
  render() {
    return (
      <div>
        <div>{this.props.greet}</div>
        <div>{this.props.count}</div>
        <button onClick={() => this.props.handleClick()}>
          Trigger parent method
        </button>
        <GrandChildComponent
          name1={this.state.name1}
          name2={this.state.name2}
          namastehChild={this.props.namasteh}
        />
      </div>
    );
  }
}

export default ChildComponent;
