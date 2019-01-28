import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";
import './logoutButton.css'

class LogoutButton extends React.Component {
  render() {

    const logout = () => {
      window.sessionStorage.setItem('user', null)
      this.props.history.push('/')
      this.props.logOut()
    }

    return (
      <div className="button-container">
        <button onClick={() => logout()
        }>Logout</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {  
    logOut: () => {
      dispatch({ type: 'LOGOUT' })
    }
  }
}

const mapStateToProps = (state) => {
  return state
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LogoutButton))