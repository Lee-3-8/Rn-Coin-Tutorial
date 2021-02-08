import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {StyleSheet, Text, View,FlatList } from 'react-native';
import CoinItem from '../components/CoinItem';
import {PRIVATE_KEY} from  '../config';
import {TESTDATA} from  '../testData';


const CoinView = ( {style, time} ) => {

  const [fetchData,SetFetchData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCoinData = async() => {
    try {
      setLoading(true)
      const data = TESTDATA.slice(0,10);
      // const { data:{data} } = await axios({
      //   url:'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
      //   params: {
      //     'start': '1',
      //     'limit': '100',
      //     'convert': 'USD'
      //   },
      //   headers: {
      //   'X-CMC_PRO_API_KEY': PRIVATE_KEY
      // }});
      time(new Date().toLocaleString())
      SetFetchData(data)
      setLoading(false)
      // console.log(data)
      // return data;
    } catch (error) {
      console.log(error)
    }
  
  }

  useEffect(() => {
    getCoinData();
  }, []);

  let coinItems = ({item}) => {
    console.log(item +`\n`)
    const {cmc_rank, name, quote:{USD:{price, market_cap}}} = item;
    // console.log(cmc_rank,name,price,market_cap)
    return (
      <CoinItem
        rank={cmc_rank}
        name={name}
        price={price}
        volume={market_cap}
      />
    )
  }

  return loading? <View style={styles.loading}><Text>로딩중입니다...</Text></View>:(
    <FlatList 
      data={fetchData}
      renderItem={coinItems}
      keyExtractor={item => item.name}
      refreshing={loading}
      onRefresh={getCoinData}  
      />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'skyblue',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  }
});

export default CoinView;