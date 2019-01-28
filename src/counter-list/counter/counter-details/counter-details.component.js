import React from 'react'
import { connect } from 'react-redux'
import './counter-details.css'
import { withRouter } from "react-router-dom"
import LogoutButton from '../../../login-page/logout-button/logoutButton';

class CounterDetails extends React.Component {

  render() {
    console.log('details')
    let index = this.props.counterList.findIndex(x => x.key === this.props.match.params.id);
    let counter = this.props.counterList[index];

    const editName = () => {
      let name = document.getElementById('input-name').value
      this.props.editName(this.props.match.params.id, name)
    }

    return (
      <div>
        <div>
          <LogoutButton />
          <h1>Details</h1>
        </div>
        <h2>{counter.name}</h2>
        <div className="details-container">
          <p>Id: {counter.key}</p>
          <p>Created: {counter.dateCreated}</p>
          <p>First click: {counter.firstClick}</p>
          <p>Last click: {counter.lastClick}</p>
        </div>
        <div>
          <input id="input-name"></input><button onClick={editName}>Edit name</button>
        </div>
        <div>
          <button onClick={() => {
            this.props.history.push('/counter')
            this.props.deleteCounter(this.props.match.params.id)
          }}>Delete</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  username: state.login.username,
  counterList: state.counter.counterList
});

const mapDispatchToProps = (dispatch, props) => {
  return {
    getCounter: (id) => {
      dispatch({ type: 'GET_COUNTER', id })
    },

    editName: (id, name) => {
      dispatch({ type: 'EDIT_NAME', id, name })
    },

    deleteCounter: (id) => {
      dispatch({ type: 'DELETE_COUNTER', id })
    },

    logOut: () => {
      dispatch({ type: 'LOGOUT' })
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CounterDetails))