const initialState = {
  username: 'Admin'
}

const ADD_USER = "ADD_USER"
const LOGOUT = "LOGOUT"

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return Object.assign(
        {},
        state, {
          username: action.username
        });
    case LOGOUT:
      return Object.assign(
        {},
        state, {
          username: ""
        });
    default:
      return state
  }
}