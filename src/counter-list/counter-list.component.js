import React, {Component} from 'react'
import Counter from './counter/counter.component'
import uuid from 'uuid'
import { connect } from 'react-redux'
class CounterList extends Component {

  // addCounter = () =>{
  //   let counter = {key: uuid()}
  //   this.setState({
  //     counterList: this.state.counterList.concat(counter)
  //   })
  // }
  
  render(){
    
    const counters = this.props.counterList.map(counter => <Counter name={counter.name}/>)
    return(
      <div>
        <div className="counter-list-container">
        {counters}
        </div>
        <button onClick={this.props.addCounter}></button>
      </div>
      
    )
  }
}

const mapStateToProps = state => ({
  counterList: state.counterList
});

const mapDispatchToProps = (dispatch, props) => {
  return {
    addCounter: (blocked) => {
      dispatch({ type: 'ADD_COUNTER', blocked });
    },

    deleteCounter: (blocked) => {
      dispatch({ type: 'DELETE_COUNTER', blocked });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterList)