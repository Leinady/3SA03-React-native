//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Weather from './components/Weather';

// create a component
const App = () => {
  return (
    <View style={styles.container}>
      <Text>App</Text>
      <Weather zipCode= "83000" />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
});

//make this component available to the app
export default App;