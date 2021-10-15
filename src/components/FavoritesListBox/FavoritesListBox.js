import React, { useState } from 'react';
import {
  ContentBox,
  ListsContainer,
  TitleWrapper,
} from './FavoritesListBox.elements';
import favIcon from '../../assets/small-fav-icon.svg';
import ItemContainer from './ItemContainer';
import { useSelector } from 'react-redux';
import {
  BoxTitle,
  ButtonsContainer,
  DateText,
  GenreWrapper,
  ListButton,
  ListGrid,
  MusicGenre,
  WeatherHeader,
  WeatherText,
  WeatherWrapper,
} from '../MusicListBox/MusicListBox.elements';
import ListItem from '../MusicListBox/ListItem';
import cityIcon from '../../assets/city-icon.svg';
import dateIcon from '../../assets/date-icon.svg';
import weatherIcon from '../../assets/weather-icon.svg';
import backIcon from '../../assets/back-icon.svg';

const FavoritesListBox = () => {
  const favorites = useSelector((state) => state.favoritesLists);
  const [listSelected, setListSelected] = useState(false);
  const [selectedListData, setSelectedListData] = useState({});

  const selectionClick = (item) => {
    setSelectedListData(item);
    setListSelected(true);
  };

  const backButton = () => {
    setListSelected(false);
  };

  if (listSelected) {
    return (
      <ContentBox>
        <WeatherHeader>
          <WeatherWrapper>
            <img src={cityIcon} alt="City icon" />
            <WeatherText>
              {selectedListData.info.city}, {selectedListData.info.country}
            </WeatherText>
          </WeatherWrapper>
          <WeatherWrapper>
            <img src={dateIcon} alt="Date icon" />
            <DateText>{new Date().toLocaleDateString()}</DateText>
          </WeatherWrapper>
          <WeatherWrapper>
            <img src={weatherIcon} alt="City icon" />
            <WeatherText>{selectedListData.info.weather}</WeatherText>
            <span>{selectedListData.info.temp}&#8451;</span>
          </WeatherWrapper>
        </WeatherHeader>
        <ButtonsContainer>
          <ListButton
            onClick={() => {
              backButton();
            }}
          >
            <img src={backIcon} alt="Back" />
            Voltar
          </ListButton>
        </ButtonsContainer>
        <BoxTitle>Músicas salvas</BoxTitle>
        <GenreWrapper>
          <MusicGenre>Gênero: {selectedListData.musicList[0].genre}</MusicGenre>
        </GenreWrapper>
        <ListGrid>
          {selectedListData.musicList[1].map((music) => {
            return <ListItem key={music.id} musicInfo={music} />;
          })}
        </ListGrid>
      </ContentBox>
    );
  } else {
    return (
      <ContentBox>
        <TitleWrapper>
          <img src={favIcon} alt="Favorite" />
          <h3>Listas Favoritas</h3>
        </TitleWrapper>
        <ListsContainer>
          {favorites.length > 0
            ? favorites.map((item) => {
                return (
                  <ItemContainer
                    key={item.info.id}
                    listData={item}
                    selectionClick={selectionClick}
                  />
                );
              })
            : null}
        </ListsContainer>
      </ContentBox>
    );
  }
};

export default FavoritesListBox;
