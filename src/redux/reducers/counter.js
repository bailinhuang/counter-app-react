

import uuid from 'uuid'
const initialState = {
  clicks: 0,
  blocked: false,
  counterList: [{ key: uuid(), name: 'bailin' }]
}

const ADD_COUNTER = "ADD_COUNTER"
const DELETE_COUNTER = "DELETE_COUNTER"
const BLOCK_COUNTER = "BLOCK_COUNTER"
const UNBLOCK_COUNTER = "UNBLOCK_COUNTER"
const CLICK_COUNTER = "CLICK_COUNTER"
const RESET_COUNTER = "RESET_COUNTER"

export default function (state = initialState, action) {
  switch (action.type) {
    case BLOCK_COUNTER:
      console.log("action block counter")
      return Object.assign(
        {},
        state, {
          blocked: true
        });
    case ADD_COUNTER:
      console.log("action add counter")
      let counter = [{ key: uuid() }]
      return Object.assign(
        {},
        state, {
          counterList: state.counterList.concat(counter) 
        });
    case DELETE_COUNTER:
      console.log("action delete counter")
      return Object.assign(
        {},
        state, {
          blocked: true
        });
    case UNBLOCK_COUNTER:
      console.log("action unblock counter")
      return Object.assign(
        {},
        state, {
          blocked: false
        });
    case CLICK_COUNTER:
      return {
        ...state,
        clicks: action.clicks
      }
    case RESET_COUNTER:
      return {
        ...state,
        clicks: action.clicks
      }
    default:
      return state
  }
}