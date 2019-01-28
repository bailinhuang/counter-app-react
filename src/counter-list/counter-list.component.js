import React, { Component } from 'react'
import Counter from './counter/counter.component'
import { connect } from 'react-redux'
import './counter-list.component.css'

class CounterList extends Component {

  render() {
    
    const addCounterToList = () => {
      let name = document.getElementById('counter-name').value
      console.log(name)
      this.props.addCounter(name)
    }

    const viewDetails = (id) => {
      this.props.viewDetails(id)
    }

    const addClick = (id) => {
      this.props.addClick(id)
    }

    const resetCounter = (id) => {
      this.props.resetCounter(id)
    }

    const counters = this.props.counterList.map(counter => <Counter
      name={counter.name}
      id={counter.key}
      clicks={counter.clicks}
      resetCounter={resetCounter}
      deleteCounter={this.props.deleteCounter} 
      viewDetails={viewDetails}
      addClick={addClick}/>)


    return (
      <div>
        <h1>Welcome {this.props.username}</h1>
        <div className="counter-form-container">
          <div>
            <label>Name</label>
            <input id="counter-name"></input>
            <button onClick={addCounterToList}>Add Counter</button>
          </div>
          <div>
            <button onClick={() => this.props.resetAllCounters()}>Reset all counters</button>
          </div>

        </div>
        <div className="counter-list-container">
          {counters}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  counterList: state.counter.counterList,
  username: state.login.username
});

const mapDispatchToProps = (dispatch, props) => {
  return {
    addCounter: (name) => {
      dispatch({ type: 'ADD_COUNTER', name });
    },

    addClick: (id) => {
      dispatch({ type: 'ADD_CLICK', id });
    },

    resetCounter: (id) => {
      dispatch({ type: 'RESET_COUNTER', id });
    },

    resetAllCounters: () => {
      dispatch({ type: 'RESET_ALL_COUNTERS'});
    },

    deleteCounter: (id) => {
      dispatch({ type: 'DELETE_COUNTER', id });
    },

    viewDetails: (id) => {
      dispatch({ type: 'VIEW_DETAILS', id });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterList)