import React from 'react';
import Search from './Search/Search';
import Card from './Card/Card';
import CartDetail from './CartDetails/CartDetails';

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.checkData = this.checkData.bind(this);
  }
  state = {
    seacrhedText: '',
    cartItems: 0
  }
  searchedTextMethod = (event) => {
    const searchText = event;
    console.log(searchText);
    this.setState({ seacrhedText: searchText });
    console.log(this.state.seacrhedText);
  }
  checkData = (event) => {
    this.cartItems = event;
    this.setState({ cartItems: event });
  }
  render() {
    return (
      <div>
        <CartDetail cartItems={this.state.cartItems} />
        <Search changed={(event) => this.searchedTextMethod(event)} className="App" />
        <Card onCartUpdate={(event) => this.checkData(event)} searchedData={this.state.seacrhedText} />
      </div>
    );
  }
}

export default App;
