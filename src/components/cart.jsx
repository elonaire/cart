import React, { Component } from "react";
import Item from "./item";

class Cart extends Component {
  render() {
    return (
      <div id="cart">
        <button onClick={this.props.onReset} className="btn-primary btn-sm m-2">
          Reset
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Increase</th>
              <th>Total (Kshs)</th>
              <th>Delete</th>
            </tr>
          </thead>
          {this.props.items.map(item => (
            <tbody>
              <tr>
                <Item
                  key={item.id}
                  onDelete={this.props.onDelete}
                  onIncrement={this.props.onIncrement}
                  item={item}
                />
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}

export default Cart;
