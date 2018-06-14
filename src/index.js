import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Cart } from "./Cart.js";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

ReactDOM.render(
  <Router history={browserHistory}>
    <Route
      path="/"
      component={App}
      url="http://101.53.137.41/api/?cat=Apparels_Men_Polos-T-Shirts&count=100&offset=0"
    />
    <Route path="/cart" component={Cart} />
    <Route
      path="/men"
      component={App}
      url="http://101.53.137.41/api/?cat=Apparels_Men_CasualShirts&count=100&offset=5;"
    />
    <Route
      path="/women"
      component={App}
      url="http://101.53.137.41/api/?cat=Apparels_Women_FusionWear_Shirts,Tops-Tunics_Tunics&count=100&offset=12;"
    />
    <Route
      path="/kids"
      component={App}
      url="http://101.53.137.41/api/?cat=Apparels&count=100&offset=0"
    />
    <Route
      path="/men_topwear"
      component={App}
      url="http://101.53.137.41/api/?cat=Apparels_Men_Sportswear_Polos-T-Shirts&count=100&offset=0;"
    />
    <Route
      path="/men_bottomwear"
      component={App}
      url="http://101.53.137.41/api/?cat=Apparels_Men_Jeans&count=100&offset=0;"
    />
    <Route
      path="/men_ethnicwear"
      component={App}
      url="http://101.53.137.41/api/?cat=Apparels_Men_Ethnicwear_EthnicSets&count=100&offset=0"
    />
    <Route
      path="/men_jackets"
      component={App}
      url="http://101.53.137.41/api/?cat=Apparels_Men_Winterwear-Seasonalwear_Jackets&count=100&offset=7;"
    />
    <Route
      path="/men_innerwear"
      component={App}
      url="http://101.53.137.41/api/?cat=Apparels_Men_Innerwear-Sleepwear_Shapewears&count=100&offset=0;"
    />
    <Route
      path="/women_westernwear"
      component={App}
      url="http://101.53.137.41/api/?cat=Apparels_Women_WesternWear_Dresses-Skirts_Dresses&count=100&offset=0;"
    />
    <Route
      path="/women_indianwear"
      component={App}
      url="http://101.53.137.41/api/?cat=Apparels_Women_EthnicWear_LehengaCholis_LehengaCholis&count=100&offset=0;"
    />
    <Route
      path="/women_activewear"
      component={App}
      url="http://101.53.137.41/api/?cat=Apparels_Women_Sports-GymWear_Shorts&count=100&offset=28;"
    />
    <Route
      path="/women_sleepwear"
      component={App}
      url="http://101.53.137.41/api/?cat=Apparels_Women_Lingerie-Sleepwear_NightSuits&count=100&offset=11;"
    />
    <Route
      path="/kids_boys"
      component={App}
      url="http://101.53.137.41/api/?cat=Apparels_Kids&count=100&offset=4"
    />
    <Route
      path="/kids_girls"
      component={App}
      url="http://101.53.137.41/api/?cat=Apparels_Kids_Girls_Dungarees-Jumpsuits_Dungarees&count=100&offset=0"
    />
  </Router>,
  document.getElementById("root")
);
