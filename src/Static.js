import React, { Component } from "react";
import { Modal } from "./Modal.js";
import { Carousel } from "./Carousel.js";
import { Navbar } from "./Hidden_Navbar.js";
import "./CSS/dkecs.css";
import "./CSS/pushy.css";
import "./CSS/style.css";
import "./CSS/theme.css";
import mens from "./images/mens.jpg";
import womens from "./images/womens.jpg";
import kids from "./images/kids.jpg";
import menu from "./images/menu.png";
import image from "./images/image.png";
import mens1 from "./images/mens1.jpg";
import womens1 from "./images/womens1.jpg";
import kid1 from "./images/kid1.jpg";

class Categories extends Component {
  render() {
    return [
      <div className="container-fluid dk_mf2_101">
        <div className="container dk_mf2_102">
          <div className="col-xs-12 dk_mf2_103">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 dk_mf2_104">
              <a href="product_page.php">
                <div className="col-sm-12 col-xs-12 dk_mf2_105">
                  <img src={mens1} className="dk_mf2_106" />
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 dk_mf2_104">
              <a href="product_page.php">
                <div className="col-sm-12 col-xs-12 dk_mf2_105">
                  <img src={womens1} className="dk_mf2_106" />
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 dk_mf2_104">
              <a href="product_page.php">
                <div className=" col-sm-12 col-xs-12 dk_mf2_105">
                  <img src={kid1} className="dk_mf2_106" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    ];
  }
}

export class Static extends Component {
  state = {
    products: []
  };
  state = {
    data: [],
    index: 0
  };
  componentDidMount() {
    var url =
      "http://101.53.137.41/api/?cat=[[{%22nodeId%22:20001,%22nodeName%22:%22FLIPKART_TREE%22}]]&count=100&offset=0";
    // "http://101.53.137.41/api/?cat=Apparels_Kids_Boys_SuitsandBlazers_Waistcoats&count=100&offset=0";
    fetch(url)
      .then(response => response.json())
      .then(response => {
        var key;
        var newArray = [];
        for (key in response) {
          if (response.hasOwnProperty(key)) {
            newArray.push(response[key]);
          }
        }
        this.setState({ data: newArray }, () => {
          console.log(this.state.data);
        });
      });
  }
  renderDiv = () => {
    const elements = [];
    if (this.state.data == 0) {
      console.log("here");
      return elements;
    } else {
      console.log(this.state.data[0]["title"]);
      for (let index in this.state.data) {
        elements.push(<div>{this.state.data[index]["title"]}</div>);
      }
      return elements;
    }
  };

  render() {
    return [
      <Navbar />,
      <div className="margin-div_dk" />,
      <Carousel />,
      <Categories />,
      <a href="#" id="back-top" title="Back to top">
        {" "}
        &uarr;
      </a>,
      <Modal />,
      <div>{this.renderDiv()}</div>,
      <div className="container-fluid dkf_1">
        Copyright 2018 xyz.com. All Rights Reserved.
      </div>
    ];
  }
}
