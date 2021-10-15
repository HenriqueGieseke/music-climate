import axios from 'axios';

export const setQuery = (query) => {
  return {
    type: 'SET_QUERY',
    payload: query,
  };
};

export const addToFavorite = (list) => {
  return {
    type: 'ADD_TO_FAVORITE',
    payload: list,
  };
};

export const removeFromFavorite = (list) => {
  return {
    type: 'REMOVE_FROM_FAVORITE',
    payload: list,
  };
};

export const toggleSearchStatus = (status) => {
  return {
    type: 'TOGGLE_SEARCH_STATUS',
    payload: status,
  };
};

export const toggleLoadingStatus = (status) => {
  return {
    type: 'TOGGLE_LOADING_STATUS',
    payload: status,
  };
};

export const searchWeather = (query) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${process.env.REACT_APP_API_KEY}&lang=pt_br&units=metric`
    );
    const weatherData = data;

    dispatch({
      type: 'SEARCH_WEATHER',
      payload: weatherData,
    });
  } catch (error) {
    const found = false;

    dispatch({
      type: 'SEARCH_WEATHER',
      payload: found,
    });
    console.log(error);
  }
};

export const getPlaylist = (weather) => async (dispatch, getState) => {
  const temperature = weather.main.temp;
  try {
    if (temperature > 32) {
      const getPlaylist = await axios.get('/search/playlist?q=rock');
      const playList = getPlaylist.data;
      const getTrackList = await axios.get(
        `/playlist/${playList.data[0].id}/tracks`
      );

      const trackList = getTrackList.data.data.slice(0, 8);
      const completeList = [{ genre: 'Rock' }, trackList];

      dispatch({
        type: 'GET_TRACKLIST',
        payload: completeList,
      });
    } else if (temperature > 24 && temperature < 32) {
      const getPlaylist = await axios.get('/search/playlist?q=pop');
      const playList = getPlaylist.data;
      const getTrackList = await axios.get(
        `/playlist/${playList.data[0].id}/tracks`
      );

      const trackList = getTrackList.data.data.slice(0, 8);
      const tracksObject = trackList;
      const completeList = [{ genre: 'Pop' }, tracksObject];

      dispatch({
        type: 'GET_TRACKLIST',
        payload: completeList,
      });
    } else if (temperature > 16 && temperature < 24) {
      const getPlaylist = await axios.get('/search/playlist?q=classical');
      const playList = getPlaylist.data;
      const getTrackList = await axios.get(
        `/playlist/${playList.data[0].id}/tracks`
      );

      const trackList = getTrackList.data.data.slice(0, 8);
      const completeList = [{ genre: 'Música Clássica' }, trackList];

      dispatch({
        type: 'GET_TRACKLIST',
        payload: completeList,
      });
    } else if (weather.main.temp < 16) {
      const getPlaylist = await axios.get('/search/playlist?q=lofi');
      const playList = getPlaylist.data;
      const getTrackList = await axios.get(
        `/playlist/${playList.data[0].id}/tracks`
      );

      const trackList = getTrackList.data.data.slice(0, 8);
      const completeList = [{ genre: 'Lo Fi' }, trackList];

      dispatch({
        type: 'GET_TRACKLIST',
        payload: completeList,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
