import React from 'react';
import { useDispatch } from 'react-redux';
import {
  GenreText,
  GenreWrapper,
  InfoWrapper,
  ItemBox,
  RemoveButton,
} from './ItemContainer.elements';
import dateIcon from '../../assets/date-icon.svg';
import weatherIcon from '../../assets/weather-icon.svg';
import cityIcon from '../../assets/city-icon.svg';
import removeIcon from '../../assets/remove-icon.svg';
import { removeFromFavorite } from '../../store/actions/storeActions';

const ItemContainer = ({ listData, selectionClick }) => {
  const dispatch = useDispatch();

  const removeButton = () => {
    dispatch(removeFromFavorite(listData));
  };

  return (
    <ItemBox
      onClick={() => {
        selectionClick(listData);
      }}
    >
      <GenreWrapper>
        <GenreText>Gênero: {listData.musicList[0].genre}</GenreText>
      </GenreWrapper>

      <InfoWrapper>
        <img src={dateIcon} alt="Date" />
        <span>{new Date(listData.info.date).toLocaleDateString()}</span>
      </InfoWrapper>
      <InfoWrapper>
        <img src={weatherIcon} alt="weather" />
        <span>
          {listData.info.weather}, {listData.info.temp}&#8451;
        </span>
      </InfoWrapper>
      <InfoWrapper>
        <img src={cityIcon} alt="city" />
        <span>
          {listData.info.city}, {listData.info.country}
        </span>
      </InfoWrapper>
      <RemoveButton
        onClick={(e) => {
          e.stopPropagation();
          removeButton();
        }}
      >
        <img src={removeIcon} alt="remove" />
      </RemoveButton>
    </ItemBox>
  );
};

export default ItemContainer;
