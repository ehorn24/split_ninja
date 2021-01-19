import "./App.css";
import React, { Component } from "react";
import NinjaInput from "./Components/NinjaInput";
import ItemInput from "./Components/ItemInput";
import TotalsInput from "./Components/TotalsInput";

export default class App extends Component {
  state = {
    ninjas: [
      { ninja: "", balance: "" },
      { ninja: "", balance: "" },
    ],
    items: [
      { item: "", price: "" },
      { item: "", price: "" },
    ],
    subtotal: "",
    tax: "",
    gratuity: "",
    total: "",
  };

  //Change handlers for all form inputs
  handleFormChange = (e) => {
    e.preventDefault();
    if (["item", "price"].includes(e.target.className)) {
      let items = [...this.state.items];
      items[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({ items });
    } else if (["ninja", "balance"].includes(e.target.className)) {
      let ninjas = [...this.state.ninjas];
      ninjas[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({ ninjas });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  //Ninja Handlers
  addNinja = (e) => {
    if (this.state.ninjas.length >= 10) {
      e.preventDefault();
    } else if (this.state.ninjas.length < 10) {
      e.preventDefault();
      this.setState((prevState) => ({
        ninjas: [...prevState.ninjas, { ninja: "", balance: "" }],
      }));
    }
  };

  deleteNinja = (i) => {
    let ninjas = [...this.state.ninjas];
    if (ninjas.length <= 1) {
      this.setState({ ninjas });
    } else {
      ninjas.splice(i, 1);
      this.setState({ ninjas });
    }
  };

  //Item Handlers
  addItem = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      items: [...prevState.items, { item: "", price: "" }],
    }));
  };

  deleteItem = (i) => {
    let items = [...this.state.items];
    if (items.length <= 1) {
      this.setState({ items });
    } else {
      items.splice(i, 1);
      this.setState({ items });
    }
  };

  render() {
    return (
      <div>
        <header>
          <h1>Split Ninja</h1>
        </header>
        <main>
          <form>
            <fieldset className="input-ninjas">
              <label htmlFor="ninja">Add up to 10 people to split</label>
              <NinjaInput
                ninjas={this.state.ninjas}
                handleNinjaChange={this.handleFormChange}
                handleDeleteNinja={this.deleteNinja}
              />
              <button onClick={this.addNinja}>Add Person</button>
            </fieldset>
            <fieldset className="input-items">
              <label htmlFor="items">Add receipt items</label>
              <ItemInput
                items={this.state.items}
                handleDeleteItem={this.deleteItem}
                handleItemChange={this.handleFormChange}
              />
              <button onClick={this.addItem}>Add Item</button>
            </fieldset>
            <fieldset className="input-totals">
              <label htmlFor="totals">Subtotal, Tax, Gratuity, and Total</label>
              <TotalsInput
                subtotal={this.state.subtotal}
                tax={this.state.tax}
                gratuity={this.state.gratuity}
                total={this.state.total}
                handleTotalsChange={this.handleFormChange}
              />
            </fieldset>
          </form>
        </main>
      </div>
    );
  }
}
