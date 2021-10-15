const initialState = [];

export default function favoritesReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      //CHECKS FOR DUPLICATE
      let index = state.findIndex(
        (el) => el.info.id === action.payload.info.id
      );

      if (index === -1) {
        return [action.payload, ...state];
      } else {
        return state;
      }

    case 'REMOVE_FROM_FAVORITE':
      return state.filter((element) => element !== action.payload);

    default:
      return state;
  }
}
