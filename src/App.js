import React, { Component } from 'react';
import './App.css';
import CounterList from './counter-list/counter-list.component';
import Login from './login-page/login.component'
import { BrowserRouter, Route, Switch } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App background"> 
          <div className="content">
            <BrowserRouter>
              <Switch>
                <Route exact path="/" >
                  <div className="">
                    <Login />
                  </div>
                </Route>
                <Route exact path="/counter" >
                  <div className="counter-content">
                    <CounterList />
                  </div>
                </Route>
                <Route exact path="/login" >
                  <div className="counter-content">
                    <Login />
                  </div>
                </Route>
              </Switch>
            </BrowserRouter>
          </div>
        </div> 
    );
  }
}

export default App;
