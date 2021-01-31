import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native'

const CoinItem = ({rank, name, price, volume}) => {
  let date = new Date();
    let now = date.toLocaleString();
    console.log(rank, name, price, volume)
    return (
      <View style={styles.container}>
        <Image
          style={ {width: '70%', height:'70%', flex: 1}}
          source= { {uri: "data:image/png;base64,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"}}
        />
        <Text style={[styles.text, { flex: 1 }]}>
          {name || 'Name'}
        </Text>
        <Text style={[styles.text, { flex: 1 }]}>
          {'Volume: ' + (volume || 0)}
        </Text>
        <Text style={[styles.text, { flex: 1 }]}>
          {'Price: ' + (price || 0)}
        </Text>
        <Text style={[styles.text, { flex: 1 }]}>
          {`#${rank}`}
        </Text>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    flexDirection: 'row', // row
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'space-around', // center, space-around
    marginTop: 5,
    marginBottom: 5
  },
  text: {
    color: 'white'
  }
});

export default CoinItem;