// NavigationStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MatchesScreen from '../Matches/Matches';
import PointsTable from '../PointsTable/PointsTable';

const Stack = createStackNavigator();

const NavigationStack = () => {
  return (
    <Stack.Navigator initialRouteName="Star Wars Blasters Tournment">
      <Stack.Screen name="Star Wars Blasters Tournment" component={PointsTable} />
      <Stack.Screen
        name="Matches"
        component={MatchesScreen}
        options={({ route }) => ({
        
        title: `${route.params?.player.name}`, // Dynamically set the header title
        })}
  />
    </Stack.Navigator>
  );
};

export default NavigationStack;
