import React, { Component } from "react";
import "./CSS/dkecs.css";
import "./CSS/pushy.css";
import "./CSS/style.css";
import "./CSS/theme.css";
import icons from "./images/icons.png";
import mens from "./images/mens.jpg";
import womens from "./images/womens.jpg";
import kids from "./images/kids.jpg";
export class Static extends Component {
  render() {
    return [
      <div className="container-fluid dk_mf2_21">
        <div className="dk_mf2_21_a">
          <div className="col-xs-1 dk_m2f_22">
            <img src={icons} className="dk_mf2_31 side-left-pushy-button" />
          </div>
          <div className="col-xs-9 dk_mf2_23">
            <img src={icons} className="dk_mf2_32" />
          </div>
          <div className="col-xs-1 dk_mf2_24">
            <a href="login.php" className="dk_mf2_33 dropbtn_dk1">
              <span className="dk_mf2_34" />
            </a>
          </div>
          <div className="col-xs-1 dk_mf2_25">
            <a href="cart.php" className="dk_mf2_36">
              <span className="dk_mf2_35" />
              <span className="dk_mf2_35plus">2</span>
            </a>
          </div>
        </div>
        <div className="dk_mf2_21_a">
          <div className="col-xs-9 dk_mf2_41">
            <input
              type="text"
              className="dk_mf2_42 website_search"
              placeholder="Seacrh..."
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
        <nav id="sideLeftPushy" className="pushy pushy-left">
          <div className="dk_mf2_1055">Home</div>
          <ul className="dk_mf2_1051">
            <li className="dk_mf2_1052">
              <a
                href="#"
                className="dk_mf2_1053 my-btn"
                data-modal="myModal1cate123"
              >
                Mens Fashion
              </a>
            </li>
            <li className="dk_mf2_1052">
              <a
                href="#"
                className="dk_mf2_1053 my-btn"
                data-modal="myModal1cate123"
              >
                Women's Fashion
              </a>
            </li>
            <li className="dk_mf2_1052">
              <a
                href="#"
                className="dk_mf2_1053 my-btn"
                data-modal="myModal1cate123"
              >
                Kids Fashion
              </a>
            </li>
          </ul>
        </nav>
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
            <img src={icons} className="dk_mf2_4" />
          </div>
          <div className="dk_mf2_5">
            <div className="dk_mf2_6 search_input">
              <input
                type="text"
                className="dk_mf2_8 website_search"
                placeholder="Seacrh..."
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
              <span className="dk_mf2_17" />
              <span className="dk_mf2_18plus">2</span>
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
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={mens} alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={womens} alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={kids} alt="Third slide" />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true" />
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true" />
          <span class="sr-only">Next</span>
        </a>
      </div>,
      <div className="container-fluid dk_mf2_101">
        <div className="container dk_mf2_102">
          <div className="col-xs-12 dk_mf2_103">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 dk_mf2_104">
              <a href="product_page.php">
                <div className="col-xs-12 dk_mf2_105">
                  <img src={icons} className="dk_mf2_106" />
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 dk_mf2_104">
              <a href="product_page.php">
                <div className="col-xs-12 dk_mf2_105">
                  <img src={icons} className="dk_mf2_106" />
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 dk_mf2_104">
              <a href="product_page.php">
                <div className="col-xs-12 dk_mf2_105">
                  <img src={icons} className="dk_mf2_106" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>,
      <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js" />,
      <script src="./jquery.pogo-slider.min.js" />
    ];
  }
}
