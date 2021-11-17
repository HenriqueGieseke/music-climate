import styled, { keyframes } from 'styled-components';

const FadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const LandingBox = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 0.3s;
  animation: ${FadeIn} 1.5s ease;
`;

export const LandingText = styled.h2`
  margin-top: -5rem;
  font-size: 5.3rem;
  color: #26f7fd;
  text-align: center;
  
  @media (max-width: 1600px) {
    margin-top: -9rem;
    font-size: 4rem;
  }
`;

export const BigLogo = styled.img``;
