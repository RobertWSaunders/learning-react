// state is not application state but just the state the reducer is responsible for
// we default the state to null to account for initial start up
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}
