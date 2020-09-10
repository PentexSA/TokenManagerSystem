import styled from 'styled-components/native';

import Colors from '@/theme/appColors';
import { Marked } from './types';

export const Dot = styled.View`
  height: 12px;
  width: 12px;
  border-radius: 10px;
  background-color: ${({ marked }: Marked) =>
    marked ? `${Colors.primaryDotColor}` : `${Colors.secondaryDotColor}`};
  margin-right: 3px;
  border-color: ${Colors.secondaryDotColor};
  border-width: 1px;
`;

export const DotContainer = styled.View`
  flex-direction: row;
`;
