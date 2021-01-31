import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TopBar = ( {title} ) => {
  return (
    <View style={styles.container}>
      <Text>Left</Text>
      <Text>{title || 'TITLE'}</Text>
      <Text>Right</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 52,
    flexDirection: 'row', // row
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'space-between', // center, space-around
    paddingLeft: 10,
    paddingRight: 10
  }
});

export default TopBar;