import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";


const LogoutButton = () => { 
  return(
    <button onClick={() => this.props.logOut()}>Logout</button>
  )
}


const mapDispatchToProps = (dispatch, props) => {
  return {
    logOut: () => {
      this.props.history.push('/')
      dispatch({ type: 'LOGOUT' })
    }
  }
}

export default withRouter(connect(mapDispatchToProps)(LogoutButton))