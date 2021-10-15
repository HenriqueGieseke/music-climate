import styled from 'styled-components';
import bgImg from '../assets/bg-img.png';

export const Main = styled.main`
  background-image: linear-gradient(
      rgba(254, 44, 84, 0.1),
      rgba(254, 44, 84, 0.1)
    ),
    url(${bgImg});
  background-position: center center;
  background-size: cover;
  width: 100vw;
  height: 93vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainBox = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const SunImg = styled.img`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 0;
`;
