const initialState = false;

export default function searchStatusReducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_SEARCH_STATUS':
      return action.payload;

    default:
      return state;
  }
}
