import React from 'react';

import { Dot, DotContainer } from './styles';

import { Levels } from './types';

const Dots = ({ levels, title }: Levels): JSX.Element => {
  return (
    <DotContainer>
      {levels.map((level, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Dot marked={!!level} key={`${title}-${index}`} />
      ))}
    </DotContainer>
  );
};

export default Dots;
