import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Cart } from "./Cart.js";
import { Men } from "./ProductPages/men.js";
import { Women } from "./ProductPages/women.js";
import { Kids } from "./ProductPages/kids.js";
import { MenTop } from "./ProductPages/men_topwear.js";
import { MenBottom } from "./ProductPages/men_bottomwear.js";
import { MenEthnic } from "./ProductPages/men_ethnicwear.js";
import { MenSuits } from "./ProductPages/men_suits.js";
import { MenInner } from "./ProductPages/men_innerwear.js";
import { WomenWestern } from "./ProductPages/women_westernwear.js";
import { WomenIndian } from "./ProductPages/women_indianwear.js";
import { WomenActive } from "./ProductPages/women_activewear.js";
import { WomenInner } from "./ProductPages/women_innerwear.js";
import { KidsBoys } from "./ProductPages/kids_boys.js";
import { KidsGirls } from "./ProductPages/kids_girls.js";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

// ReactDOM.render(<App />, document.getElementById("root"));

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/cart" component={Cart} />
    <Route path="/men" component={Men} />
    <Route path="/women" component={Women} />
    <Route path="/kids" component={Kids} />
    <Route path="/men_topwear" component={MenTop} />
    <Route path="/men_bottomwear" component={MenBottom} />
    <Route path="/men_ethnicwear" component={MenEthnic} />
    <Route path="/men_suits" component={MenSuits} />
    <Route path="/men_innerwear" component={MenInner} />
    <Route path="/women_westernwear" component={WomenWestern} />
    <Route path="/women_indianwear" component={WomenIndian} />
    <Route path="/women_activewear" component={WomenActive} />
    <Route path="/women_innerwear" component={WomenInner} />
    <Route path="/kids_boys" component={KidsBoys} />
    <Route path="/kids_girls" component={KidsGirls} />
  </Router>,
  document.getElementById("root")
);
