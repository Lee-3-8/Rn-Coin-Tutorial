import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CoinView from './screens/CoinView'

export default function App() {
  return (
    <CoinView></CoinView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  box: {
    backgroundColor: 'black',
    width: 50,
    height: 50,
  }
});
