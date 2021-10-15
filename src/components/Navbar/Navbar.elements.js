import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  width: 100vw;
  height: 7vh;
  background: #fe2c54;
  padding: 1rem 3rem;

  display: flex;
  justify-content: space-between;
`;

export const LogoTitle = styled.h1`
  font-weight: 700;
  font-size: 1.1rem;
  white-space: nowrap;
`;

export const LinkText = styled.span`
  white-space: nowrap;
`;

export const NavLink = styled(Link)`
  display: flex;
  gap: 10%;
  justify-content: center;
  align-items: center;

  text-decoration: none;
  color: #fff;

  transition: all 0.4s;

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

export const NavIcon = styled.img`
  height: 2rem;
`;

export const NavForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchInput = styled.input`
  outline: none;
  border: none;
  background-color: #fff;
  border-radius: 5px;
  width: 30%;
  height: 95%;
  padding: 0 1rem;

  ::-webkit-input-placeholder {
    color: #3e82fc;
  }
`;

export const SearchButton = styled.button`
  border: none;
  background-color: transparent;
  margin-left: -30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  transition: all 0.4s;

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(-1px);
  }
`;
