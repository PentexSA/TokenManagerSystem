import styled from 'styled-components/native';
import linearGradient from 'react-native-linear-gradient';
import Colors from '@/theme/appColors';

export const Container = styled(linearGradient).attrs({
  colors: ['#091707', '#050D03'],
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

export const VerticalScroll = styled.ScrollView`
  flex: 1;
  margin-bottom: 5px;
`;
