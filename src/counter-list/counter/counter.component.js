import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './counter.component.css'

class Counter extends Component {

  constructor(props) {
    super(props)
    this.name = this.props.name
    this.id = this.props.id
    this.state = {
      clicks: 0,
      blocked: false
    }
  }

  clickCounter() {
    if (!this.state.blocked) {
      this.setState({
        clicks: this.state.clicks + 1
      })
    }
  }

  resetCounter() {
    if (!this.state.blocked) {
      this.setState({
        clicks: 0
      })
    }
  }

  blockCounter = () => {
    if (this.state.blocked) {
      this.setState({
        blocked: false
      })
    } else {
      this.setState({
        blocked: true
      })
    }
    console.log(this.state.blocked)
  }

  render() {
    if(this.props.reset){
      this.resetCounter()
    } 
    return (
      <div className="container-counter">
        <h3>{this.props.name} {this.props.id}</h3>
        <p>{this.state.clicks}</p>
        <button onClick={() => this.clickCounter()}>Add</button>
        <button onClick={() => this.resetCounter()}>Reset</button>
        <BlockButton onClick={this.blockCounter} blocked={this.state.blocked} />
        <button onClick={() => this.props.deleteCounter(this.id)}>Delete</button>
      </div>
    )
  }
}

function BlockButton(props) {
  let button
  if (props.blocked) {
    button = <button onClick={props.onClick}>Unblock</button>
  } else {
    button = <button onClick={props.onClick}>Block</button>
  }
  return (
    button
  )
}

Counter.propTypes = {
  name: PropTypes.string
}

Counter.defaultProps = {
  name: 'Counter'
}

export default Counter