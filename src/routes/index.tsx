import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Colors from '@/theme/appColors';
import Sheet from '../pages/Sheet';

const Main = createStackNavigator();

const MainRoutes: React.FC = () => (
  <Main.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: Colors.primary,
      },
    }}
  >
    <Main.Screen name="Sheet" component={Sheet} />
  </Main.Navigator>
);

export default MainRoutes;
