import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import {
  BoxTitle,
  ButtonsContainer,
  ContentBox,
  DateText,
  GenreWrapper,
  ListButton,
  ListGrid,
  MusicGenre,
  NotFoundMsg,
  WeatherHeader,
  WeatherText,
  WeatherWrapper,
} from './MusicListBox.elements';
import cityIcon from '../../assets/city-icon.svg';
import weatherIcon from '../../assets/weather-icon.svg';
import dateIcon from '../../assets/date-icon.svg';
import favoriteIcon from '../../assets/small-fav-icon.svg';
import ListItem from './ListItem';
import LandingContent from '../LandingContent/LandingContent';
import { addToFavorite } from '../../store/actions/storeActions';

const MusicListBox = ({ loadingStatus, musicList }) => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weatherData);

  const date = new Date();

  const favoriteButton = () => {
    const info = {
      id: weatherData.id,
      date,
      city: weatherData.name,
      country: weatherData.sys.country,
      weather: weatherData.weather[0].description,
      temp: weatherData.main.temp.toFixed(),
    };

    const musicListObject = { musicList, info };
    dispatch(addToFavorite(musicListObject));
  };

  if (weatherData === false) {
    return (
      <ContentBox>
        <NotFoundMsg>Nenhum resultado encontrado</NotFoundMsg>
      </ContentBox>
    );
  } else if (musicList.length > 0) {
    return (
      <ContentBox>
        <WeatherHeader>
          <WeatherWrapper>
            <img src={cityIcon} alt="City icon" />
            <WeatherText>
              {weatherData.name}, {weatherData.sys.country}
            </WeatherText>
          </WeatherWrapper>
          <WeatherWrapper>
            <img src={dateIcon} alt="Date icon" />
            <DateText>{new Date().toLocaleDateString()}</DateText>
          </WeatherWrapper>
          <WeatherWrapper>
            <img src={weatherIcon} alt="City icon" />
            <WeatherText>{weatherData.weather[0].description}</WeatherText>
            <span>{weatherData.main.temp.toFixed()}&#8451;</span>
          </WeatherWrapper>
        </WeatherHeader>
        <ButtonsContainer>
          <ListButton
            onClick={() => {
              favoriteButton();
            }}
          >
            <img src={favoriteIcon} alt="Reload icon" />
            Adicionar lista aos favoritos
          </ListButton>
        </ButtonsContainer>
        <BoxTitle>Músicas recomendadas</BoxTitle>
        <GenreWrapper>
          <MusicGenre>Gênero: {musicList[0].genre}</MusicGenre>
        </GenreWrapper>
        <ListGrid>
          {musicList[1].map((music) => {
            return <ListItem key={music.id} musicInfo={music} />;
          })}
        </ListGrid>
      </ContentBox>
    );
  } else {
    return <LandingContent />;
  }
};

const mapStateToProps = (state) => {
  return {
    musicList: state.trackList,
  };
};

export default connect(mapStateToProps)(MusicListBox);
