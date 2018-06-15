import React, { Component } from "react";
import "./CSS/style.css";
import { Link } from "react-router";

export class Payment extends Component {
  displayCart = () => {
    var obj = JSON.parse(localStorage.getItem("cart"));
    var elements = [];
    for (let index in obj) {
      elements.push(
        <div>
          <span>{obj[index]["title"]}-</span>&nbsp;
          <span>{obj[index]["sellingPrice"]}</span>
          <br />
        </div>
      );
    }
    localStorage.removeItem("cart");
    return elements;
  };

  displayBill = () => {
    var obj = JSON.parse(localStorage.getItem("billing"));
    var elements = [];
    for (let index in obj) {
      elements.push(
        <div>
          <span>Address: {obj[index]["Address"]}</span>
          <br />
          <span>Address2: {obj[index]["Address 2"]}</span>
          <br />
          <span>Country: {obj[index]["Country"]}</span>
          <br />
          <span>Email: {obj[index]["Email"]}</span>
          <br />
          <span>First Name: {obj[index]["First Name"]}</span>
          <br />
          <span>Last Name: {obj[index]["Last Name"]}</span>
          <br />
          <span>State: {obj[index]["State"]}</span>
          <br />
          <span>Username: {obj[index]["Username"]}</span>
          <br />
          <span>Zip: {obj[index]["Zip"]}</span>
          <br />
        </div>
      );
    }
    return elements;
  };

  render() {
    return [
      <div>
        <div>
          Cart Details-
          {this.displayCart()}
        </div>
        <br />
        <div>
          Billing Details-
          {this.displayBill()}
        </div>
        <Link to="/">Make a New Order</Link>
      </div>
    ];
  }
}
