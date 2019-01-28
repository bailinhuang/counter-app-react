import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './counter.component.css'
import { withRouter } from "react-router-dom"

class Counter extends Component {

  constructor(props) {
    super(props) 
    this.state = { 
      blocked: false
    }
  }

  redirectDetails = () => {
    let url = '/counter-details/' + this.props.id
    this.props.history.push(url)
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
    console.log(this.props)
    return (
      <div className="container-counter">
        <h3>{this.props.name}</h3>
        <p>{this.props.clicks}</p>
        <button onClick={() => this.props.addClick(this.props.id)}>Add</button>
        <button onClick={() => this.props.resetCounter(this.props.id)}>Reset</button>
        <BlockButton onClick={this.blockCounter} blocked={this.state.blocked} />
        <button onClick={() => this.redirectDetails()}>Details</button>
        <button onClick={() => this.props.deleteCounter(this.props.id)}>Delete</button>
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

export default withRouter(Counter) 