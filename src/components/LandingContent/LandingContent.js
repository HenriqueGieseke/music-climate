import React from 'react';
import bigLogoImg from '../../assets/big-logo.svg';
import { BigLogo, LandingBox, LandingText } from './LandingContent.elements';

const LandingContent = () => {
  return (
    <LandingBox>
      <LandingText>Ache músicas para o seu clima</LandingText>
      <BigLogo src={bigLogoImg} alt="Big logo" />
    </LandingBox>
  );
};

export default LandingContent;
