import React, { Component } from 'react'
import Counter from './counter/counter.component'
import { connect } from 'react-redux'
import './counter-list.component.css'

class CounterList extends Component {

  render() {
    const counters = this.props.counterList.map(counter => <Counter name={counter.name} id={counter.key} deleteCounter={this.props.deleteCounter} />)
    
    const addCounterToList = () => {
      let name = document.getElementById('counter-name').value
      console.log(name) 
      this.props.addCounter(name)
    }

    return (
      <div>
        <h1>Welcome {this.props.username}</h1>
        <div className="counter-form-container">
          <div>
            <label>Name</label>
            <input id="counter-name"></input>
            <button onClick={addCounterToList}>Add Counter</button>
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
  username: state.username
});

const mapDispatchToProps = (dispatch, props) => {
  return {
    addCounter: (name) => {
      dispatch({ type: 'ADD_COUNTER', name });
    },

    deleteCounter: (id) => {
      dispatch({ type: 'DELETE_COUNTER', id });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterList)