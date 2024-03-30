import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import ChannelDetail from '../screens/ChannelDetail';
import Reels from '../screens/Reels';

const Stack = createNativeStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Reels">
        <Stack.Screen
          name="Reels"
          component={Reels}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ChannelDetail" component={ChannelDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
