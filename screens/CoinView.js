import React from 'react'
import {StyleSheet, Text, View} from 'react-native';

const CoinView = () => {
  return (
    <View style= {styles.container}>
      <Text>New Views</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CoinView;