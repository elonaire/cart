import React, { Component } from "react";

class Product extends Component {
  render() {
    let { img, name, price } = this.props.product;
    return (
      <div className="product">
        <img src={img} alt="product" />
        <h1>{name}</h1>
        <h3>Kshs.{price}</h3>
        <button
          onClick={() => {
            this.props.onAddToCart(this.props.product);
          }}
          className="btn btn-success"
        >
          Add to Cart
        </button>
      </div>
    );
  }
}

export default Product;
