import React, { useEffect, useRef, useState } from 'react';
import {
  NavbarContainer,
  NavLink,
  NavIcon,
  LogoTitle,
  NavForm,
  SearchInput,
  SearchButton,
  LinkText,
} from './Navbar.elements';
import smallLogo from '../../assets/small-logo.svg';
import searchIcon from '../../assets/search-icon.svg';
import favIcon from '../../assets/small-fav-icon.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPlaylist,
  searchWeather,
  setQuery,
  toggleLoadingStatus,
  toggleSearchStatus,
} from '../../store/actions/storeActions';
import { useHistory } from 'react-router-dom';

const Navbar = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const weather = useSelector((state) => state.weatherData);
  const searchStatus = useSelector((state) => state.searchStatus);
  const loadingStatus = useSelector((state) => state.loadingStatus);

  const isFirstRun = useRef(true);

  const history = useHistory();

  const routeChange = () => {
    let path = '/';
    history.push(path);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    routeChange();

    dispatch(searchWeather(searchQuery));

    dispatch(toggleSearchStatus(true));
  };

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    } else if (weather === false) {
      return;
    }
    dispatch(getPlaylist(weather));
  }, [weather]);

  return (
    <NavbarContainer>
      <NavLink to="/">
        <NavIcon src={smallLogo} alt="Small logo" />
        <LogoTitle>clima de Música</LogoTitle>
      </NavLink>

      <NavForm onSubmit={onSubmit}>
        <SearchInput
          type="text"
          placeholder="Cidade"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <SearchButton type="submit">
          <img src={searchIcon} alt="Search icon" />
        </SearchButton>
      </NavForm>

      <NavLink to="/favorites">
        <NavIcon src={favIcon} alt="Favorite icon" />
        <LinkText>Listas favoritas</LinkText>
      </NavLink>
    </NavbarContainer>
  );
};

export default Navbar;
