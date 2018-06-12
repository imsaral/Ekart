import React, { Component } from "react";

export class Static extends Component {
  render() {
    return [
      <div>
        <input type="text" className="searchInput" placeholder="Search..." />
      </div>
    ];
  }
}
