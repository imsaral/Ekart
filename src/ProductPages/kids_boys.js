import React, { Component } from "react";
import { Navbar } from "../Navbar.js";
import { Cards } from "../Cards.js";
import "../CSS/dkecs.css";
import "../CSS/pushy.css";
import "../CSS/style.css";
import "../CSS/theme.css";

export class KidsBoys extends Component {
  render() {
    return [
      <Navbar />,
      <div className="margin-div_dk" />,
      <h1>Kids->Boys's Page</h1>,
      <Cards
        url="http://101.53.137.41/api/?cat=Apparels_Kids&count=100&offset=4;"
        handler={handler.bind(this)}
        items={this.state.itemsInCart}
      />,
      <div className="container-fluid dkf_1">
        Copyright 2018 xyz.com. All Rights Reserved.
      </div>
    ];
  }
}
