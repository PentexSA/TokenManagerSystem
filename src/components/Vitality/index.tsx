/* eslint-disable react/no-array-index-key */
import React from 'react';

import { Levels } from './types';

import {
  DotContainer,
  Square,
  HealthContainer,
  HealthText,
  SquareLabelContainer,
} from './styles';

const Vitality = ({
  levels,
  title,
  labels,
  numberLabels,
}: Levels): JSX.Element => {
  return (
    <DotContainer>
      {levels.map((level, index) => (
        <HealthContainer>
          <HealthText>{labels[index]}</HealthText>
          <SquareLabelContainer>
            {numberLabels[index] ? (
              <HealthText>{numberLabels[index]}</HealthText>
            ) : (
              <></>
            )}
            <Square marked={!!level} key={`${title}-${index}`} />
          </SquareLabelContainer>
        </HealthContainer>
      ))}
    </DotContainer>
  );
};

export default Vitality;
