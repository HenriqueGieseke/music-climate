const initialState = [];

export default function weatherDataReducer(state = initialState, action) {
  switch (action.type) {
    case 'SEARCH_WEATHER':
      return action.payload;

    case 'CLEAR_WEATHER':
      return (state = []);

    default:
      return state;
  }
}
