import styled, { keyframes } from 'styled-components';

const FadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const ContentBox = styled.div`
  width: 60%;
  height: max-content;
  display: flex;
  margin-top: -8%;
  align-items: center;
  flex-direction: column;
  background: #3e82fc;
  border-radius: 20px;
  transition: all 0.3s;
  animation: ${FadeIn} 1.5s ease;

  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const WeatherHeader = styled.div`
  border-radius: 20px 20px 0px 0px;
  background: #26f7fd;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3.5rem;
`;

export const WeatherWrapper = styled.div`
  display: flex;
  width: max-content;
  justify-content: space-between;
  align-items: center;

  span {
    color: #3e82fc;
    font-weight: 600;
  }
`;

export const DateText = styled.span`
  color: #3e82fc;
  font-weight: 600;
  font-size: 0.8rem;
  text-align: center;
  margin-left: 0.5rem;
`;

export const WeatherText = styled.span`
  white-space: nowrap;
  color: #3e82fc;
  font-weight: 600;
  font-size: 1rem;
  margin: 0 0.5rem;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  padding: 0.8rem 2.5rem;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ListButton = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  cursor: pointer;

  color: #fff;
  font-weight: 600;
  font-size: 0.75rem;

  img {
    margin-right: 0.7rem;
  }

  transition: all 0.4s;

  &:hover {
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

export const BoxTitle = styled.h3`
  color: #ffffff;
  font-weight: 700;
  font-size: 1.2rem;
`;

export const GenreWrapper = styled.div`
  width: 100%;
  padding: 1.1rem 0;
  display: flex;
  justify-content: center;
`;

export const MusicGenre = styled.div`
  padding: 0.6rem 1.2rem;
  border-radius: 5px;
  background: #26f7fd;
  color: #3e82fc;
  font-weight: 600;
`;

export const ListGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 20%;
  padding: 0 3rem;
  width: 100%;
  gap: 3%;
`;

export const NotFoundMsg = styled.h2`
  color: #fff;
  padding: 3rem 1rem;
  font-size: 1.5rem;
`;
