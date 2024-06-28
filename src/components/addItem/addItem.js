import React, { Component } from 'react';

class AddItem extends Component {
  state = {
    quantity: 1,
    product: '',
    price: 1,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state);
    this.setState({
      quantity: 1,
      product: '',
      price: 1,
    });
  };

  handleIncrement = (name) => {
    this.setState((prevState) => ({
      [name]: parseInt(prevState[name]) + 1,
    }));
  };

  handleDecrement = (name) => {
    this.setState((prevState) => ({
      [name]: Math.max(1, parseInt(prevState[name]) - 1),
    }));
  };

  render() {
    return (
      <div className="item">
        <form onSubmit={this.handleSubmit}>
          <div className='adding'>
            <button type="button" onClick={() => this.handleDecrement('quantity')}>-</button>
            <input
              type="number"
              name="quantity"
              value={this.state.quantity}
              readOnly
            />
            <button type="button" onClick={() => this.handleIncrement('quantity')}>+</button>
          </div>
          <input
            type="text"
            value={this.state.product}
            placeholder="Enter Product"
            id="product"
            onChange={this.handleChange}
            required
          />
          <input
            type="number"
            value={this.state.price}
            placeholder="Price per piece"
            id="price"
            min="1"
            onChange={this.handleChange}
            required
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default AddItem;
