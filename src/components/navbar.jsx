import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a href="#" className="navbar-brand">
          ReactJS Shopping Cart App
          <span className="badge badge-pill badge-secondary m-2">
            {this.props.totalItems}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
