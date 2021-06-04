import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './screens/Home';
import Configuration from './screens/Configuration';
import {NavigationStack} from './types/navigation';

const App: React.FC = () => {
  const Stack = createStackNavigator<NavigationStack>();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={() => ({
          headerShown: false,
          transitionSpec: {
            open: {animation: 'timing', config: {duration: 300}},
            close: {animation: 'timing', config: {duration: 300}},
          },
          gestureEnabled: false,
          cardStyleInterpolator: ({current: {progress}}) => {
            return {
              cardStyle: {
                opacity: progress,
              },
            };
          },
        })}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Configuration" component={Configuration} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
