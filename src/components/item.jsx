import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <React.Fragment>
        <td>
          <span>{this.props.item.name}</span>
        </td>
        <td>
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </td>
        <td>
          <button
            onClick={() => this.props.onIncrement(this.props.item)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
        </td>
        <td>{this.props.item.quantity * this.props.item.price}</td>
        <td>
          <button
            onClick={() => this.props.onDelete(this.props.item.id)}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
        </td>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.item.quantity === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { quantity } = this.props.item;
    return quantity === 0 ? "Zero" : quantity;
  }
}

export default Item;
