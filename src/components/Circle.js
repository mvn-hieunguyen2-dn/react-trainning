import { Component } from "react";

export class Circle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStart: true,
      info: this.props.info,
      counter: this.props.info.countNum,
    };
  }

  componentDidMount() {
    this.interval = this.state.isStart
      ? setInterval(
          () => this.setState({ counter: this.state.counter - 1 }),
          1000
        )
      : "";
  }

  componentDidUpdate() {
    console.log(`Circle ${this.state.info.id} working....`);
    if (this.state.isStart === false) {
      clearInterval(this.interval);
      this.interval = 0;
      return;
    }
    if (this.interval === 0 && this.state.isStart) {
      this.interval = setInterval(
        () => this.setState({ counter: this.state.counter - 1 }),
        1000
      );
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    console.log(`Circle ${this.state.info.id} destroy....`);
  }

  setStart() {
    this.setState({ isStart: !this.state.isStart });
  }

  render() {
    return (
      <div
        onClick={() => this.setStart()}
        style={{
          width: this.state.info.size,
          height: this.state.info.size,
          border: "1px solid black",
          borderRadius: "50%",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: this.state.isStart ? "green" : "red",
        }}
      >
        <p>{this.state.isStart ? "Start" : "Stop"}</p>
        {this.state.counter}
      </div>
    );
  }
}