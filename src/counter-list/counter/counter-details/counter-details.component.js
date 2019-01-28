import React from 'react'
import { connect } from 'react-redux'; 

class CounterDetails extends React.Component {

  render() {

    let index = this.props.counterList.findIndex(x => x.key === this.props.match.params.id);
    let counter = this.props.counterList[index];
    console.log(this.props.counterList)
    console.log(this.props)
    console.log(index)
    console.log(counter)

    return (
      <div>
        <div>
          <h1>Details</h1>
          <h2>{counter.name}</h2>
        </div>
        <p>Id: {counter.key}</p>
        <div> 
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
      dispatch({ type: 'GET_COUNTER', id });
    },

    editName: (id) => {
      dispatch({ type: 'EDIT_NAME', id });
    },

    deleteCounter: (id) => {
      dispatch({ type: 'DELETE_COUNTER', id });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterDetails)