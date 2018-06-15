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
import { Navbar } from "./Navbar.js";

const Card = ({
  prodId,
  title,
  imageUrl,
  mrp,
  sellingPrice,
  discount,
  handleClick
}) => (
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
      <button id={prodId} onClick={handleClick}>
        ADD TO CART
      </button>
    </div>
  </div>
);

export class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      cart: localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : []
    };
  }
  addToCart = prodId => {
    var description;
    var imageUrlStr;
    var mrp;
    var productBrand;
    var productId;
    var productUrl;
    var sellerAverageRating;
    var sellerName;
    var sellerNoOfRatings;
    var sellerNoOfReviews;
    var sellingPrice;
    var title;
    for (let i in this.state.data) {
      if (this.state.data[i]["productId"] == prodId) {
        description = this.state.data[i]["description"];
        imageUrlStr = this.state.data[i]["imageUrlStr"].split(";")[1];
        mrp = this.state.data[i]["mrp"];
        productBrand = this.state.data[i]["productBrand"];
        productId = this.state.data[i]["productId"];
        productUrl = this.state.data[i]["productUrl"];
        sellerAverageRating = this.state.data[i]["sellerAverageRating"];
        sellerName = this.state.data[i]["sellerName"];
        sellerNoOfRatings = this.state.data[i]["sellerNoOfRatings"];
        sellerNoOfReviews = this.state.data[i]["sellerNoOfReviews"];
        sellingPrice = this.state.data[i]["sellingPrice"];
        title = this.state.data[i]["title"];
        break;
      }
    }
    var obj = {
      description: description,
      imageUrlStr: imageUrlStr,
      mrp: mrp,
      productBrand: productBrand,
      productId: prodId,
      productUrl: productUrl,
      sellerAverageRating: sellerAverageRating,
      sellerName: sellerName,
      sellerNoOfRatings: sellerNoOfRatings,
      sellerNoOfReviews: sellerNoOfReviews,
      sellingPrice: sellingPrice,
      title: title
    };
    var newArray;
    newArray = this.state.cart.slice();
    newArray.push(obj);
    this.setState({ cart: newArray }, () => {
      var json = JSON.stringify(this.state.cart);
      localStorage.setItem("cart", json);
      // alert("Item added to cart successfully");
      var obj1 = JSON.parse(localStorage.getItem("cart"));
      console.log(obj1);
      // var handler = this.props.handler;
      var e = this.props.items + 1;
      this.props.handler(e);
    });
  };
  componentDidMount() {
    // Typical usage (don't forget to compare props):
    var url = this.props.url;
    // "http://101.53.137.41/api/?cat=Apparels_Men_Polos-T-Shirts&count=100&offset=0";
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

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.url !== prevProps.url) {
      var url = this.props.url;
      // "http://101.53.137.41/api/?cat=Apparels_Men_Polos-T-Shirts&count=100&offset=0";
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
              handleClick={() =>
                this.addToCart(this.state.data[index]["productId"])
              }
            />
          </div>
        );
      }
    }
    return elements;
  };
  render() {
    // this.display();
    return [
      <div className="container-fluid dk_mf2_151">
        <div className="container dk_mf2_152">{this.renderProducts()}</div>
      </div>
    ];
  }
}
