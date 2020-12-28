import React, { Component } from "react";
import { render } from "react-dom";
import Background from "./Component/Background";
import "./style/style.css";

class Gettest extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
    };
  }

  render() {
    return (
      <div id="bg">
        <Background />
      </div>
    );
  }
}
export default Gettest;
