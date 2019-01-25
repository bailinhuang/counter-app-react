const initialState = {
  username: 'Admin'
}

const ADD_USER = "ADD_USER"

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return Object.assign(
        {},
        state, {
          username: action.username
        });
    default:
      return state
  }
}