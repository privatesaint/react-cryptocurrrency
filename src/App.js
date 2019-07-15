import React, { Component } from 'react';
import Header from './component/common/Header';
import List from './component/list/List';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <List />
      </div>
    );
  }
}

export default App;
