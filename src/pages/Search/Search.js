import React from 'react';
import { Main, SunImg } from '../../elements/MainContainer.elements';
import sunImg from '../../assets/sun-img.svg';
import MusicListBox from '../../components/MusicListBox/MusicListBox';

const Search = () => {
  return (
    <Main>
      <MusicListBox />
      <SunImg src={sunImg} alt="Sun image" />
    </Main>
  );
};

export default Search;
