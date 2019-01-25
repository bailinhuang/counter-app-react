import uuid from 'uuid'
const initialState = { 
  blocked: false,
  counterList: [{key: uuid(), name: 'bailin', clicks: 0}]
}

const ADD_COUNTER = "ADD_COUNTER"
const DELETE_COUNTER = "DELETE_COUNTER"

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_COUNTER: 
      let newName
      if(action.name === ""){
        newName = "Counter"
      } else{
        newName = action.name
      }
      let counter = [{ key: uuid(), name: newName, clicks: 0}]
      return Object.assign(
        {},
        state, {
          counterList: state.counterList.concat(counter)
        });
    case DELETE_COUNTER: 
      let newCounterList = [...state.counterList]
      let index = newCounterList.findIndex(x => x.key === action.id); 
      newCounterList.splice(index, 1) 
      console.log(index)
      console.log(action.id)
      console.log(newCounterList)
      return Object.assign(
        {},
        state, {
          counterList: newCounterList
        });
    default:
      return state
  }
}