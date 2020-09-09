import styled from 'styled-components/native';
import linearGradient from 'react-native-linear-gradient';
import Colors from '@/theme/appColors';
import { Marked } from './types';

export const Container = styled(linearGradient).attrs({
  colors: [Colors.greenNero, Colors.primary],
})`
  flex: 1;
  padding: 0 20px;
`;

export const Header = styled.SafeAreaView`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 30px;
`;
export const Thumbnail = styled.Image`
  height: 110px;
  width: 110px;
  border-radius: 50px;
`;
export const Name = styled.Text`
  font-size: 30px;
  color: ${Colors.primaryText};
`;

export const Generation = styled.Text`
  font-size: 25px;
  color: ${Colors.secondaryText};
`;
export const ClanIcon = styled.Image`
  height: 50px;
  width: 50px;
`;
export const Column = styled.View`
  flex-direction: column;
  justify-content: center;
`;

export const TitleContainer = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: ${Colors.primaryText};
`;
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
export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
