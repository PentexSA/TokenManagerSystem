import styled from 'styled-components/native';
import linearGradient from 'react-native-linear-gradient';
import Colors from '@/theme/appColors';

export const Container = styled(linearGradient).attrs({
  colors: [Colors.greenNero, Colors.primary],
})`
  flex: 1;
`;
