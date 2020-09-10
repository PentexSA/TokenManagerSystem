import React from 'react';

import { Dot, DotContainer } from './styles';

import { Levels } from './types';

const Dots = ({ levels }: Levels): JSX.Element => {
  return (
    <DotContainer>
      {levels.map(level => (
        <Dot marked={!!level} />
      ))}
    </DotContainer>
  );
};

export default Dots;
