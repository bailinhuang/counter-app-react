import uuid from 'uuid'

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const initialState = {
  blocked: false,
  counterList: [],
  counterDetail: { key: '', name: '' }
}

const ADD_COUNTER = "ADD_COUNTER"
const ADD_CLICK = "ADD_CLICK"
const DELETE_COUNTER = "DELETE_COUNTER"
const GET_COUNTER = "GET_COUNTER"
const EDIT_NAME = "EDIT_NAME"
const RESET_COUNTER = "RESET_COUNTER"
const RESET_ALL_COUNTERS = "RESET_ALL_COUNTERS"
const LOGOUT = "LOGOUT"

export default function (state = initialState, action) {
  let newName
  let newCounterList
  let newCounterDetail
  let index
  switch (action.type) {
    case ADD_COUNTER:
      if (action.name === "") {
        newName = "Counter"
      } else {
        newName = action.name
      }
      let date = new Date().toString()
      let counter = [{ key: uuid(), name: newName, clicks: 0, dateCreated: date, firstClick: date, lastClick: date }]
      return Object.assign(
        {},
        state, {
          counterList: state.counterList.concat(counter)
        });
    case ADD_CLICK:
      newCounterList = [...state.counterList]
      index = newCounterList.findIndex(x => x.key === action.id);
      newCounterList[index].clicks += 1
      newCounterList[index].lastClick = new Date().toString()
      return Object.assign(
        {},
        state, {
          counterList: newCounterList
        });
    case RESET_COUNTER:
      newCounterList = [...state.counterList]
      index = newCounterList.findIndex(x => x.key === action.id);
      newCounterList[index].clicks = 0
      return Object.assign(
        {},
        state, {
          counterList: newCounterList
        });
    case RESET_ALL_COUNTERS:
      newCounterList = [...state.counterList]
      newCounterList.forEach(x => x.clicks = 0)
      return Object.assign(
        {},
        state, {
          counterList: newCounterList
        });
    case DELETE_COUNTER:
      newCounterList = [...state.counterList]
      index = newCounterList.findIndex(x => x.key === action.id);
      newCounterList.splice(index, 1)
      return Object.assign(
        {},
        state, {
          counterList: newCounterList
        });
    case EDIT_NAME:
      if (action.name === "") {
        newName = "Counter"
      } else {
        newName = action.name
      }
      newCounterList = [...state.counterList]
      index = newCounterList.findIndex(x => x.key === action.id);
      newCounterList[index].name = newName
      return Object.assign(
        {},
        state, {
          counterList: newCounterList
        });
    case GET_COUNTER:
      newCounterList = [...state.counterList]
      index = newCounterList.findIndex(x => x.key === action.id);
      newCounterDetail = newCounterList[index]
      return Object.assign(
        {},
        state, {
          counterDetail: newCounterDetail
        }); 
    default:
      return state
  }
}