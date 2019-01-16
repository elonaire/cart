import React, { Component } from "react";
import Product from "./product";

class Products extends Component {
  render() {
    return (
      <div className="products">
        {this.props.products.map(product => (
          <Product
            key={product.id}
            product={product}
            onAddToCart={this.props.onAddToCart}
          />
        ))}
      </div>
    );
  }
}

export default Products;
