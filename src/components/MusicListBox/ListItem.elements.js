import styled from 'styled-components';

export const ListElement = styled.div`
  width: 100%;
  background: #26f7fd;
  border-radius: 10px;
  padding: 0.5rem 2rem;
  display: flex;
  justify-content: space-between;

  filter: drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.25));

  img {
    height: 100%;
    max-height: 70px;
  }
`;

export const LinkWrapper = styled.div`
  background: #3e82fc;
  border-radius: 5px;
  padding: 0.2rem 0.5rem;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: min-content;

  a {
    text-align: center;
    font-size: 0.6rem;
    text-decoration: none;
    color: #fff;
  }

  transition: all 0.4s;

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

export const MusicInfoWrapper = styled.div`
  color: #3e82fc;
  width: 100%;
  padding: 0 1rem;

  h4 {
    width: 150px;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  span {
    font-size: 0.8rem;
  }
`;
