import "./App.css";
import React, { Component } from "react";
import NinjaInput from "./NinjaInput";
import ItemInput from "./ItemInput";

export default class App extends Component {
  state = {
    ninjas: ["", ""],
    items: [
      { item: "", price: "" },
      { item: "", price: "" },
    ],
    subtotal: "",
    tax: "",
    gratuity: "",
    total: "",
  };

  //Ninja Handlers
  addNinja = (e) => {
    if (this.state.ninjas.length >= 10) {
      e.preventDefault();
    } else if (this.state.ninjas.length < 10) {
      e.preventDefault();
      this.setState((prevState) => ({
        ninjas: [...prevState.ninjas, ""],
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

  handleNinjaChange = (key, val) => {
    let ninjas = [...this.state.ninjas];
    ninjas[key] = val;
    this.setState({ ninjas });
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

  handleItemChange = (e) => {
    e.preventDefault();
    if (["item", "price"].includes(e.target.className)) {
      let items = [...this.state.items];
      items[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({ items });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  handleTotalsChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
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
                handleNinjaChange={this.handleNinjaChange}
                handleDeleteNinja={this.deleteNinja}
              />
              <button onClick={this.addNinja}>Add Person</button>
            </fieldset>
            <fieldset className="input-items">
              <label htmlFor="items">Add receipt items</label>
              <ItemInput
                items={this.state.items}
                handleDeleteItem={this.deleteItem}
                handleItemChange={this.handleItemChange}
              />
              <button onClick={this.addItem}>Add Item</button>
            </fieldset>
            <fieldset className="input-totals">
              <p>Subtotal, tax, gratuity & total</p>
              <label htmlFor="subtotal">Subtotal: </label>
              <input
                type="number"
                name="subtotal"
                id="subtotal"
                placeholder="Subtotal"
                value={this.state.subtotal}
                onChange={this.handleTotalsChange}
              />
              <label htmlFor="tax">Tax: </label>
              <input
                type="number"
                name="tax"
                id="tax"
                placeholder="Tax"
                value={this.state.tax}
                onChange={this.handleTotalsChange}
              />
              <label htmlFor="gratuity">Gratuity: </label>
              <input
                type="number"
                name="gratuity"
                id="gratuity"
                placeholder="Gratuity (Optional)"
                value={this.state.gratuity}
                onChange={this.handleTotalsChange}
              />
              <label htmlFor="total">Total: </label>
              <input
                type="number"
                name="total"
                id="total"
                placeholder="Receipt Total"
                value={this.state.total}
                onChange={this.handleTotalsChange}
              />
            </fieldset>
          </form>
        </main>
      </div>
    );
  }
}
