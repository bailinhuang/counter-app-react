import React, { Component } from 'react';
import './App.css';
import CounterList from './counter-list/counter-list.component';
import Login from './login-page/login.component'
import CounterDetails from './counter-list/counter/counter-details/counter-details.component'
import { BrowserRouter, Route, Switch } from "react-router-dom"; 


class App extends Component {
  render() {
    return (
      <div className="App background">
        <div className="content">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Login}/> 
              <Route exact path="/counter" component={CounterList} /> 
              <Route exact path="/login" component={Login}/> 
              <Route strict path="/counter-details/:id" component={CounterDetails}/> 
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
