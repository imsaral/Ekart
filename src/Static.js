import React, { Component } from "react";
import { Modal } from "./Modal.js";
import { Carousel } from "./Carousel.js";
import { Navbar } from "./Navbar.js";
import { Cards } from "./Cards.js";
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
    itemsInCart: JSON.parse(localStorage.getItem("cart")).length
  };

  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
  }

  handler(e) {
    this.setState({
      itemsInCart: e
    });
  }

  render() {
    var handler = this.handler;
    return [
      <Navbar items={this.state.itemsInCart} />,
      <div className="margin-div_dk" />,
      <Carousel />,
      <Categories />,
      <a href="#" id="back-top" title="Back to top">
        {" "}
        &uarr;
      </a>,
      <Modal />,
      <Cards handler={handler.bind(this)} items={this.state.itemsInCart} />,
      <div className="container-fluid dkf_1">
        Copyright 2018 xyz.com. All Rights Reserved.
      </div>
    ];
  }
}
