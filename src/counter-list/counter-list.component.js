import React, {Component} from 'react'
import Counter from './counter/counter.component'
class CounterList extends Component {

  constructor(){
    super()
    this.state = {
      counterList : [{name: 'bailin'}]
    }
  }

  addCounter(){
    this.setState({
      counterList: this.setState.counterList.push(<Counter/>)
    })
  }
  
  render(){
    
    const counters = this.state.counterList.map(counter => <Counter name={counter.name}/>)
    return(
      <div>{counters}</div>
    )
  }
}

export default CounterList