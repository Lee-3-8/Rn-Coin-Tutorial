import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import CoinView from './screens/CoinView'
import TopBar from './components/TopBar'

export default function App() {
  const [now, setRefreshTime] = useState('');
  return (
    <View style={styles.container}>
      <View style = {styles.statusBar}/>
      <TopBar title='Show Me The Coin' refreshDate = {now}/>
      <CoinView style = {styles.coinView} time = {setRefreshTime}/>
    </View>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#C2185B',
    height: Constants.statusBarHeight
  },
  container: {
    flex: 1
  },
  coinView: {
    width: '100%',
    flex: 1,
    flexDirection: 'column', // row
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'flex-start' // center, space-around
  }
});
