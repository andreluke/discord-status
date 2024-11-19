import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../pages/Home';
import { Status } from '../pages/Status';

export type RootStackParamList = {
    Home: undefined;
    Status: undefined;
  };
  
  const Stack = createStackNavigator<RootStackParamList>();

const Routes = () => {
  return (
    <Stack.Navigator id={undefined} initialRouteName="Home" screenOptions={{
        cardStyle: { backgroundColor: "#29293d" }, // Fundo cinza escuro
      }}>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Status" component={Status} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

export default Routes
