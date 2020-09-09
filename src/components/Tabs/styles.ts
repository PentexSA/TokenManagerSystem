import styled from 'styled-components/native';
import Colors from '@/theme/appColors';
import { Selected } from './types';

export const ContainerTabs = styled.View`
  width: 100%;
  flex-direction: row;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 10px 0%;
  border-radius: 20px;
  margin-left: 10px;
`;

export const TabsText = styled.Text`
  font-size: ${({ selected }: Selected): string =>
    selected ? '15px' : '14px'};
  color: ${Colors.secondaryText};
  text-transform: uppercase;
  padding: 0 15px;
  padding-bottom: 6px;
`;

export const Line = styled.View`
  width: 100%;
  height: 1px;
  background-color: black;
`;
