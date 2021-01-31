import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box , {backgroundColor:'red'}]}></View>
      <View style={[styles.box , {}]}></View>
      <View style={[styles.box , {backgroundColor:'pink'}]}></View>
      <Text>fuck</Text>
      <StatusBar style="auto" />
    </View>
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
