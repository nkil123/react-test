import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './src/components/NavigationStack/NavigationStack';
import { StyleSheet } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
    <NavigationStack />
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
