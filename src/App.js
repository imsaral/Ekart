import React, { Component } from "react";
import { Static } from "./Static.js";
import "./CSS/dkecs.css";
import "./CSS/pushy.css";
import "./CSS/style.css";
import "./CSS/theme.css";

export default class App extends Component {
  render() {
    console.log("acas", this.props.route.url);
    return <Static url={this.props.route.url} />;
  }
}
