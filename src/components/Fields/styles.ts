import styled from 'styled-components/native';

import Colors from '@/theme/appColors';

export const Body = styled.View`
  margin-bottom: 1px;
  margin-left: 10px;
`;
export const SubTitle = styled.Text`
  font-size: 25px;
  color: ${Colors.primaryText};
`;
export const Label = styled.Text`
  font-size: 20px;
  color: ${Colors.secondaryText};
`;
export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
