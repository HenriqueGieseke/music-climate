const initialState = [];

export default function tracklistReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_TRACKLIST':
      return action.payload;

    case 'CLEAR_TRACKLIST':
      return (state = []);

    default:
      return state;
  }
}
