import React, { Component } from "react";
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

const Card = ({ prodId, title, imageUrl, mrp, sellingPrice, discount }) => (
  <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6 dk_mf2_153">
    <div className="col-xs-12 dk_mf2_154">
      <a href="product_profile.php" className="dk_mf2_155">
        <div className="col-xs-12 dk_mf2_156">
          <div className="dk_mf2_157">
            <img src={imageUrl} className="dk_mf2_158 img-responsive" />
          </div>
          <div className="dk_mf2_159">
            <span className="dk_mf2_160">{title}</span>
          </div>
          <div className="dk_mf2_163">
            <span className="dk_mf2_164">Rs. {sellingPrice}</span>
            <span className="dk_mf2_165">Rs. {mrp}</span>
            <span className="dk_mf2_166">({discount.toFixed(0)}% OFF)</span>
          </div>
        </div>
      </a>
      {/* <button id={prodId}>ADD TO CART</button> */}
    </div>
  </div>
);

export class Cards extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    var url =
      "http://101.53.137.41/api/?cat=Apparels_Men_Polos-T-Shirts&count=100&offset=0;";
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
          //   console.log(this.state.data);
        });
      });
  }
  renderProducts = () => {
    const elements = [];
    if (this.state.data == 0) {
      return elements;
    } else {
      for (let index in this.state.data) {
        // console.log(index);
        let disc =
          ((this.state.data[index]["mrp"] -
            this.state.data[index]["sellingPrice"]) /
            this.state.data[index]["mrp"]) *
          100;
        elements.push(
          <div key={index}>
            <Card
              prodId={this.state.data[index]["productId"]}
              title={this.state.data[index]["title"]}
              imageUrl={this.state.data[index]["imageUrlStr"].split(";")[0]}
              mrp={this.state.data[index]["mrp"]}
              sellingPrice={this.state.data[index]["sellingPrice"]}
              discount={disc}
            />
          </div>
        );
      }
    }
    return elements;
  };
  render() {
    return [
      <div className="container-fluid dk_mf2_151">
        <div className="container dk_mf2_152">{this.renderProducts()}</div>
      </div>
    ];
  }
}
