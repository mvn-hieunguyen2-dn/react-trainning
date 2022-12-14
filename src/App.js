import MainLayout from "./layouts/MainLayout";
import React, { Component } from "react";

class Circle extends Component {
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

class Circles extends Component {
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
export class Parent extends Component {
  state = {
    children: [
      {
        id: 1,
        name: "Child 1",
        countNum: 10,
        isStart: false,
        size: 100,
      },
      {
        id: 2,
        name: "Child 1",
        countNum: 10,
        isStart: false,
        size: 100,
      },
      {
        id: 3,
        name: "Child 1",
        countNum: 10,
        isStart: false,
        size: 100,
      },
    ],
    page: "Home",
  };
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{
          padding: 10,
        }}
      >
        <button onClick={() => this.setState({ page: "Home" })}>
          Switch Home
        </button>
        <button onClick={() => this.setState({ page: "About" })}>
          Switch About
        </button>
        {this.state.page === "Home" && <Circles {...this.state} />}
      </div>
    );
  }
}

export class Child extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    return <div></div>;
  }
}

class App extends Component {
  render() {
    return (
      <MainLayout>
        <Parent />
      </MainLayout>
    );
  }
}

export default App;
