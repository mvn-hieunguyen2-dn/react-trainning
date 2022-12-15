import { Component } from "react";
import { Circle } from "./Circle";

export class Circles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      children: this.props.children,
    };
  }
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "space-between", height: '100%' }}>
        {this.state.children.map((children, i) => {
          return (
            <div key={i}>
              <Circle info={children} />
            </div>
          );
        })}
      </div>
    );
  }
}