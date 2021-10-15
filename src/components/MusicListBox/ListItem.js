import React from 'react';
import {
  ListElement,
  MusicInfoWrapper,
  LinkWrapper,
} from './ListItem.elements';

const ListItem = ({ musicInfo }) => {
  return (
    <ListElement>
      <img src={musicInfo.album.cover} alt="Music cover" />

      <MusicInfoWrapper>
        <h4>{musicInfo.title_short}</h4>
        <span>{musicInfo.artist.name}</span>
      </MusicInfoWrapper>
      <LinkWrapper>
        <a href={musicInfo.link} target="_blank" rel="noreferrer">
          Música no Deezer
        </a>
      </LinkWrapper>
    </ListElement>
  );
};

export default ListItem;
