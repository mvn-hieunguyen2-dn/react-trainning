import MainLayout from "./layouts/MainLayout";
import React, { Component } from "react";
import { Circles } from "./components/Circles";
import Form from "./components/Form";

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
    user: []
  };

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
        <button onClick={() => this.setState({ page: "Form" })}>
          Switch Form
        </button>
        {this.state.page === "Home" && <Circles {...this.state} />}
        {this.state.page === "Form" && <Form setData={this.setState} />}
      </div>
    );
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
