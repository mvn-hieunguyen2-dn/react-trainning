import { Component } from "react";
import { Circle } from "./Circle";

export class Circles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      circles: this.props.circles,
    };
  }
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "space-between", height: '100%' }}>
        {this.state.circles.map((circle, i) => {
          return (
            <div key={i}>
              <Circle info={circle} />
            </div>
          );
        })}
      </div>
    );
  }
}