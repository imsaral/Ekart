import React, { Component } from "react";
import { Navbar } from "../Navbar.js";
import { Cards } from "../Cards.js";
import "../CSS/dkecs.css";
import "../CSS/pushy.css";
import "../CSS/style.css";
import "../CSS/theme.css";

export class KidsGirls extends Component {
  render() {
    return [
      <Navbar />,
      <div className="margin-div_dk" />,
      <h1>Kids->Girls's Page</h1>,
      <Cards url="http://101.53.137.41/api/?cat=Apparels_Kids_Girls_Dungarees-Jumpsuits_Dungarees&count=100&offset=0" />,
      <div className="container-fluid dkf_1">
        Copyright 2018 xyz.com. All Rights Reserved.
      </div>
    ];
  }
}
