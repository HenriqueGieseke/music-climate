import styled from 'styled-components';

export const ItemBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #26f7fd;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  padding: 1rem 4rem;
`;

export const GenreWrapper = styled.div`
  padding: 1rem 1.2rem;
  background-color: #3e82fc;
  border-radius: 10px;
`;

export const GenreText = styled.span`
  color: #fff;
  font-weight: 600;
  font-size: 0.9rem;
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #3e82fc;
    font-size: 0.9rem;
  }

  img {
    margin-right: 0.6rem;
  }
`;

export const RemoveButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.4s;

  &:hover {
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(-1px);
  }
`;
