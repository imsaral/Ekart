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

class Carousel extends Component {
  render() {
    return (
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={mens} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={womens} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={kids} alt="Third slide" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export class Static extends Component {
  componentDidMount() {
    var that = this;
    var url =
      "http://101.53.137.41/api/?cat=Apparels_Kids_Boys_SuitsandBlazers_Waistcoats&count=100&offset=0";

    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response);
      });
  }
  closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
  openNav() {
    document.getElementById("myNav").style.width = "40%";
  }
  render() {
    return [
      <div className="container-fluid dk_mf2_21">
        <div className="dk_mf2_21_a">
          <div className="col-xs-1 dk_m2f_22">
            <span onClick={this.openNav} id="myNavButton">
              &#9776;
            </span>
            <div id="myNav" class="overlay">
              <a
                href="javascript:void(0)"
                class="btnclose2"
                onClick={this.closeNav}
              >
                &times;
              </a>
              <div class="overlay-content">
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
              </div>
            </div>

            {/* <nav className="navbar navbar-light bg-light">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <a className="navbar-brand" href="#">
                Hidden brand
              </a>
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">
                    Disabled
                  </a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </nav> */}
          </div>
          <div className="col-xs-9 dk_mf2_23">
            <img src={image} className="dk_mf2_32" />
          </div>
          <div className="col-xs-1 dk_mf2_24">
            <a href="login.php" className="dk_mf2_33 dropbtn_dk1">
              <i className="fas fa-user user">
                <span className="dk_mf2_34" />
              </i>
            </a>
          </div>
          <div className="col-xs-1 dk_mf2_25">
            <a href="cart.php" className="dk_mf2_36">
              <i id="cart" className="fas fa-shopping-cart dk_mf2_35">
                <span className="dk_mf2_35plus">2</span>
              </i>
            </a>
          </div>
        </div>
        <div className="dk_mf2_21_a">
          <div className="col-xs-9 dk_mf2_41">
            <input
              type="text"
              className="dk_mf2_42 website_search"
              placeholder="Search..."
            />
          </div>
          <div className="col-xs-3 dk_mf2_43">
            <input
              type="submit"
              className="dk_mf2_44 website_search_btn"
              value="Search"
            />
          </div>
        </div>
      </div>,
      <div className="container-fluid dk_mf2_1">
        <div className="dk_mf2_81">
          <ul className="dk_mf2_82">
            <li className="dk_mf2_83">
              <a href="#" className="dk_mf2_84">
                100% buyer protection | Free Shipping above INR 999
              </a>
            </li>
          </ul>
          <ul className="dk_mf2_82 dk_mf2_85">
            <li className="dk_mf2_83">
              <a href="login.php" className="dk_mf2_84">
                Sign In
              </a>
              <a href="register.php" className="dk_mf2_84">
                Sign Up
              </a>
              <a href="#" className="dk_mf2_84">
                Track Order
              </a>
              <a href="#" className="dk_mf2_84">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="dk_mf2_2">
          <div className="dk_mf2_3 logo">
            <img src={image} className="dk_mf2_4" />
          </div>
          <div className="dk_mf2_5">
            <div className="dk_mf2_6 search_input">
              <input
                type="text"
                id="SearchQuery"
                className="dk_mf2_8 website_search"
                placeholder="Search..."
              />
            </div>
            <div className="dk_mf2_7 serach_button">
              <input
                type="submit"
                className="dk_mf2_11 website_search_btn"
                value="Search"
              />
            </div>
          </div>
          <div className="dk_mf2_15 cart-button">
            <a href="cart.php" className="dk_mf2_16">
              <i id="cart" className="fas fa-shopping-cart fa-2x dk_mf2_17">
                <span className="dk_mf2_18plus">2</span>
              </i>
            </a>
          </div>
        </div>
        <div className="dk_mf2_51">
          <nav className="dk_mf2_55">
            <ul className="dk_mf2_56">
              <li>
                <a href="#">Men</a>
                <ul className="dk_mf2_58">
                  <li>
                    <a href="product_page.php">Ethnic Wear</a>
                  </li>
                  <li>
                    <a href="product_page.php">Illustrator</a>
                  </li>
                  <li>
                    <a href="product_page.php">Web Design</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Women</a>
                <ul className="dk_mf2_58">
                  <li>
                    <a href="product_page.php">Ethnic Wear</a>
                  </li>
                  <li>
                    <a href="product_page.php">Designer Wear</a>
                  </li>
                  <li>
                    <a href="product_page.php">Watches & Wearables</a>
                  </li>
                  <li>
                    <a href="product_page.php">Ethnic Wear</a>
                  </li>
                  <li>
                    <a href="product_page.php">Designer Wear</a>
                  </li>
                  <li>
                    <a href="product_page.php">Watches & Wearables</a>
                  </li>
                  <li>
                    <a href="product_page.php">Ethnic Wear</a>
                  </li>
                  <li>
                    <a href="product_page.php">Designer Wear</a>
                  </li>
                  <li>
                    <a href="product_page.php">Watches & Wearables</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Kids</a>
                <ul className="dk_mf2_58">
                  <li>
                    <a href="#">Web Design</a>
                  </li>
                  <li>
                    <a href="#">User Experience</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>,
      <div className="margin-div_dk" />,
      <Carousel />,
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
      </div>,
      <a href="#" id="back-top" title="Back to top">
        {" "}
        &uarr;
      </a>,

      <div className="container-fluid dkf_1">
        Copyright 2018 xyz.com. All Rights Reserved.
      </div>
    ];
  }
}
