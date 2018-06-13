import React, { Component } from "react";
import { Static } from "./Static.js";
import "./CSS/dkecs.css";
import "./CSS/pushy.css";
import "./CSS/style.css";
import "./CSS/theme.css";

/*function reqListener(response) {
  console.log("here");
  console.log(response);
}*/

export default class App extends Component {
  render() {
    /*var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open(
      "GET",
      "http://101.53.137.41/api/?cat=Apparels_Women_WesternWear_Shirts,Tops-Tunics_Tunics&count=100&offset=0;"
    );
    oReq.send();*/
    return <Static />;
  }
}
