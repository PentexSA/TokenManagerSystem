import styled from 'styled-components/native';

import Colors from '@/theme/appColors';
import { Marked } from './types';

export const Square = styled.View`
  height: 15px;
  width: 15px;
  margin: 2px;
  background-color: ${({ marked }: Marked) =>
    marked ? `${Colors.primaryDotColor}` : `${Colors.secondaryDotColor}`};
  margin-left: 8px;
  border-color: ${Colors.secondaryDotColor};
  border-width: 1px;
`;

export const DotContainer = styled.View`
  flex-direction: column;
  width: 80%;
`;

export const HealthContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HealthText = styled.Text`
  color: ${Colors.primaryText};
  font-size: 18px;
`;

export const SquareLabelContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
