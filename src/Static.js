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

class Modal extends Component {
  state = {
    arr: []
  };
  signup = () => {
    var name = document.getElementById("name1").value;
    var age = document.getElementById("age1").value;
    var uname = document.getElementById("uname1").value;
    var pwd = document.getElementById("psw1").value;
    var obj = { name: name, age: age, uname: uname, pwd: pwd };
    var newArray = this.state.arr.slice();
    console.log("xx");
    newArray.push(obj);
    this.setState({ arr: newArray }, () => {
      console.log("yayy");
      var json = JSON.stringify(this.state.arr);
      localStorage.setItem("data", json);
      alert("Sign up successfull");
      document.getElementById("dusra").reset();
    });
  };
  signin = () => {
    var obj = JSON.parse(localStorage.getItem("data"));
    var uname = document.getElementById("uname2").value;
    var pwd = document.getElementById("psw2").value;
    var check = 0;
    for (var i = 0; i < obj.length; i++) {
      if (obj[i].uname == uname && obj[i].pwd == pwd) {
        check = 1;
        break;
      }
    }
    if (check == 1) alert("Log In successfull");
    else alert("Invalid username or password");
    document.getElementById("pehla").reset();
  };

  render() {
    return [
      <div
        className="modal fade"
        id="register1"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Sign Up
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form id="dusra">
              <div className="modal-body">
                <label>
                  <b>Name </b>
                </label>&emsp;
                <input
                  type="text"
                  id="name1"
                  placeholder="Enter your Name"
                  required
                />
                <br />
                <label>
                  <b>Age </b>
                </label>&emsp;
                <input
                  type="number"
                  id="age1"
                  placeholder="Enter your Age"
                  required
                />
                <br />
                <label>
                  <b>Username </b>
                </label>&emsp;
                <input
                  type="text"
                  id="uname1"
                  placeholder="Enter Username"
                  required
                />
                <br />
                <label>
                  <b>Password </b>
                </label>&emsp;
                <input
                  type="password"
                  id="psw1"
                  placeholder="Enter Password"
                  required
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.signup}
                  data-dismiss="modal"
                >
                  Sign UP
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>,
      <div
        className="modal fade"
        id="login1"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Sign In
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form id="pehla">
              <div className="modal-body">
                <label>
                  <b>Username </b>
                </label>&emsp;
                <input
                  type="text"
                  id="uname2"
                  placeholder="Enter Username"
                  name="uname"
                  required
                />
                <br />
                <label>
                  <b>Password </b>
                </label>&emsp;
                <input
                  type="password"
                  id="psw2"
                  placeholder="Enter Password"
                  name="psw"
                  required
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.signin}
                  data-dismiss="modal"
                >
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    ];
  }
}

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
            <div id="myNav" className="overlay">
              <a
                href="javascript:void(0)"
                className="btnclose2"
                onClick={this.closeNav}
              >
                &times;
              </a>
              <div className="overlay-content">
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
              </div>
            </div>
          </div>
          <div className="col-xs-9 dk_mf2_23">
            <img src={image} className="dk_mf2_32" />
          </div>
          <div className="col-xs-1 dk_mf2_24">
            <a
              className="dk_mf2_33 dropbtn_dk1"
              data-toggle="modal"
              data-target="#login"
            >
              <i
                data-toggle="modal"
                data-target="#login1"
                className="fas fa-user user"
              >
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
              <a
                className="dk_mf2_84"
                data-toggle="modal"
                data-target="#login1"
              >
                Sign In
              </a>
              <a
                data-toggle="modal"
                data-target="#register1"
                className="dk_mf2_84"
              >
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
      <Modal />,
      <div className="container-fluid dkf_1">
        Copyright 2018 xyz.com. All Rights Reserved.
      </div>
    ];
  }
}
