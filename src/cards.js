<div class="col-lg-3 col-md-3 col-sm-4 col-xs-6 dk_mf2_153">
  <div class="col-xs-12 dk_mf2_154">
    <a href="product_profile.php" class="dk_mf2_155">
      <div class="col-xs-12 dk_mf2_156">
        <div class="dk_mf2_157">
          <img
            src="images/100000707037a.jpg"
            class="dk_mf2_158 img-responsive"
          />
        </div>
        <div class="dk_mf2_159">
          <span class="dk_mf2_160">Brown Solid Casual Jacket</span>
        </div>
        <div class="dk_mf2_161">
          <span class="dk_mf2_162">Pack of 2 T-shirts</span>
        </div>
        <div class="dk_mf2_163">
          <span class="dk_mf2_164">Rs. 439</span>
          <span class="dk_mf2_165">Rs. 1,099</span>
          <span class="dk_mf2_166">(60% OFF)</span>
        </div>
        <div class="dk_mf2_167">
          <span class="dk_mf2_168">Sizes : S, M, L, XL</span>
        </div>
      </div>
    </a>
  </div>
</div>;
import React, { Component } from "react";

export class cards extends Component {
  state = {
    data: [],
    index: 0
  };
  componentDidMount() {
    var url =
      "http://101.53.137.41/api/?cat=Apparels_Kids_Boys_SuitsandBlazers_Waistcoats&count=100&offset=0";
    fetch(url)
      .then(response => response.json())
      .then(response => {
        var key;
        for (key in response) {
          if (response.hasOwnProperty(key)) {
            index = index + 1;
            let newArray = this.state.data.slice();
            newArray.push(response[key]);
            this.setState({ data: newArray });
          }
        }
      });
  }
  renderPlayers = () => {
    const elements = [];
    for (let i = 0; i < this.state.index; i++) {
      elements.push(
        <div key={index}>
          <DrawButton handleClick={() => this.drawPlayerCards(index)}>
            Draw One
          </DrawButton>
          <CardList list={this.state.playerCards[index] || []} />
        </div>
      );
    }

    return elements;
  };
}
