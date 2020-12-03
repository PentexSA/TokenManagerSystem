/* eslint-disable react/no-array-index-key */
import React from 'react';

import { Dot, DotContainer, Square } from './styles';

import { Levels } from './types';

const Dots = ({ levels, title, square }: Levels): JSX.Element => {
  return (
    <DotContainer>
      {levels.map((level, index) => {
        return square ? (
          <Square marked={!!level} key={`${title}-${index}`} />
        ) : (
          <Dot marked={!!level} key={`${title}-${index}`} />
        );
      })}
    </DotContainer>
  );
};

export default Dots;
