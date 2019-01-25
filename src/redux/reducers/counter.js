

import uuid from 'uuid'
const initialState = {
  clicks: 0,
  blocked: false,
  counterList: [{ key: uuid(), name: 'bailin' }]
}

const ADD_COUNTER = "ADD_COUNTER"
const DELETE_COUNTER = "DELETE_COUNTER"

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_COUNTER:
      console.log("action add counter")
      let counter = [{ key: uuid(), name: action.name }]
      return Object.assign(
        {},
        state, {
          counterList: state.counterList.concat(counter)
        });
    case DELETE_COUNTER:
      console.log("action delete counter")
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