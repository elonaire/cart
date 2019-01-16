import React, { Component } from "react";
//import logo from "./logo.svg";
import NavBar from "./components/navbar";
import "./App.css";
import Cart from "./components/cart";
import Products from "./components/products";

class App extends Component {
  state = {
    items: [],
    products: [
      {
        id: 1,
        name: "Infinix Hot 6",
        price: 10000,
        img: "img/infinix.jpg",
        quantity: 0
      },
      {
        id: 2,
        name: "Samsung s9",
        price: 16999,
        img: "img/samsung.jpg",
        quantity: 0
      },
      {
        id: 3,
        name: "Oppo f9",
        price: 13999,
        img: "img/opp-f9-blue.jpg",
        quantity: 0
      }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalItems={this.state.items.filter(i => i.quantity > 0).length}
        />
        <main className="container">
          <Cart
            items={this.state.items}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
          />
          <Products
            products={this.state.products}
            onAddToCart={this.handleAddToCart}
          />
        </main>
      </React.Fragment>
    );
  }

  handleIncrement = item => {
    const items = [...this.state.items];
    const index = this.state.items.indexOf(item);
    items[index] = { ...item };
    items[index].quantity++;
    this.setState({ items });
  };

  handleAddToCart = product => {
    product.quantity++;
    console.log(product);
    let items = [...this.state.items];
    console.log(items);

    if (items.length > 0) {
      for (let item in items) {
        let index = item;
        if (items[index].name === product.name) {
          this.setState({ items });
        } else {
          items.push(product);
          this.setState({ items });
        }
      }
    } else {
      items.push(product);
      this.setState({ items });
    }
    console.log(items);
  };

  handleReset = () => {
    const items = this.state.items.map(i => {
      i.quantity = 0;
      return i;
    });
    this.setState({ items });
  };

  handleDelete = itemId => {
    const items = this.state.items.filter(i => i.id !== itemId);
    this.setState({ items });
  };
}

export default App;
