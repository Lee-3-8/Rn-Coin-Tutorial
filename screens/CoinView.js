import React from 'react'
import {StyleSheet, Text, View} from 'react-native';

const CoinView = ( {style} ) => {
  return (
    <View style= {[styles.container, style]}>
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