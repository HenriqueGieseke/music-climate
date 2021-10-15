import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import favoritesReducer from './reducers/favoritesReducer';
import searchStatusReducer from './reducers/searchStatusReducer';
import tracklistReducer from './reducers/tracklistReducer';
import weatherDataReducer from './reducers/weatherDataReducer';

const rootReducer = combineReducers({
  weatherData: weatherDataReducer,
  trackList: tracklistReducer,
  searchStatus: searchStatusReducer,
  favoritesLists: favoritesReducer,
});

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage,
    blacklist: [
      'query',
      'trackList',
      'weatherData',
      'searchStatus',
      'loadingStatus',
    ],
  },
  rootReducer
);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistedStore = persistStore(store);
