import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";

import './login.component.css'

class Login extends Component {

  render() {
    let authenticate = () => {
      let username = document.getElementById("username-input").value
      console.log(username)
      if (username !== "") {  
        window.sessionStorage.setItem('user', username)
        this.props.addUser(username)
        this.props.history.push('/counter') 
      }
    }

    return (
      <div>
        <div className="login-form">
          <h1>Welcome</h1>
          <p className="big-font">Enter your username</p>
          <input id="username-input"></input>
        </div>
        <div>
          <button className="button-med" onClick={() => authenticate()}>Login</button>
        </div>
      </div>

    )
  }
}

const mapStateToProps = state => ({
  username: state.username
});

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (username) => {
      dispatch({ type: 'ADD_USER', username });
    } 
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
 