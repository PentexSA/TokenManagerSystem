import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Foundation';

import Colors from '@/theme/appColors';
import Sheet from '@/pages/Sheet';
import SheetBack from '@/pages/SheetBack';

const SettingsStack = createStackNavigator();

const SettingsSheetFrontStackScreen = () => (
  <SettingsStack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: Colors.primary,
      },
    }}
  >
    <SettingsStack.Screen name="Sheet" component={Sheet} />
  </SettingsStack.Navigator>
);

const SettingsSheetBackStackScreen = () => (
  <SettingsStack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: Colors.primary,
      },
    }}
  >
    <SettingsStack.Screen name="SheetBack" component={SheetBack} />
  </SettingsStack.Navigator>
);

const Tab = createBottomTabNavigator();

const MainRoutes: React.FC = () => (
  <Tab.Navigator
    tabBarOptions={{
      style: {
        backgroundColor: 'black',
        borderTopWidth: 0,
      },
      labelStyle: { color: '#900' },
    }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }: { focused: boolean }) => {
        if (route.name === 'Frente') {
          return (
            <Icon
              name="align-left"
              size={30}
              color={focused ? '#ff0000' : '#900'}
            />
          );
        }
        return (
          <Icon
            name="align-right"
            size={30}
            color={focused ? '#ff0000' : '#900'}
          />
        );
      },
    })}
  >
    <Tab.Screen name="Frente" component={SettingsSheetFrontStackScreen} />
    <Tab.Screen name="Verso" component={SettingsSheetBackStackScreen} />
  </Tab.Navigator>
);

export default MainRoutes;
