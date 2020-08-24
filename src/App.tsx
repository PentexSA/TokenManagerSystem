import React from 'react';
import { View, Text } from 'react-native';

import Colors from './theme/appColors';

const App: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: `${Colors.primary}`,
      }}
    >
      <Text style={{ color: `${Colors.primaryText}`, fontSize: 30 }}>
        Vampiro a Mascara
      </Text>
    </View>
  );
};

export default App;
