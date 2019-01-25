import React, { Component } from 'react';
import './App.css';
import CounterList from './counter-list/counter-list.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Da Best Counter App</h1>
        </header>
        <div className="counter-content">
          <CounterList />
        </div>
      </div>
    );
  }
}

export default App;
