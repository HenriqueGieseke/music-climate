import React from 'react';
import { Main, SunImg } from '../../elements/MainContainer.elements';
import sunImg from '../../assets/sun-img.svg';
import FavoritesListBox from '../../components/FavoritesListBox/FavoritesListBox';

const Favorites = () => {
  return (
    <Main>
      <FavoritesListBox />
      <SunImg src={sunImg} alt="Sun image" />
    </Main>
  );
};

export default Favorites;
