import React, { Component } from 'react'
import { connect } from 'react-redux';
import queryString from 'query-string';

class CounterDetails extends React.Component {

  render() { 
    console.log(this.props)
    return (
      <div>
        <div>
          <h2>Details</h2> 
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    editName: (id) => {
      dispatch({ type: 'EDIT_NAME', id });
    },

    deleteCounter: (id) => {
      dispatch({ type: 'DELETE_COUNTER', id });
    }
  }
}

export default connect(mapDispatchToProps)(CounterDetails)