import {React} from 'react'
import { connect } from 'react-redux';

class CounterDetails extends React.Component{

  render(){
    return(
      <div>
        <h2>Details</h2>
      </div>
    )
  }
}


const mapStateToProps = state => ({ 
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

export default connect(mapStateToProps, mapDispatchToProps)(CounterDetails)