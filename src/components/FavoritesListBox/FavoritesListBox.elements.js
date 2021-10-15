import styled, { keyframes } from 'styled-components';

const FadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const ContentBox = styled.div`
  width: 60%;
  height: 60%;
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

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 3rem 0;

  img {
    margin-right: 0.8rem;
  }

  h3 {
    color: #fff;
    font-weight: 700;
    font-size: 0.9rem;
  }
`;

export const ListsContainer = styled.div`
  width: 100%;
  max-height: 485px;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 0 0 3rem 0;
  overflow-y: auto;
`;
