import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {StyleSheet, Text, View,ScrollView } from 'react-native';
import CoinItem from '../components/CoinItem';
import {PRIVATE_KEY} from  '../config';
import {TESTDATA} from  '../testData';


const CoinView = ( {style, time} ) => {

  const [fetchData,SetFetchData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCoinData = async() => {
    try {
      setLoading(true)
      console.log(PRIVATE_KEY)
      const data = TESTDATA.slice(0,100);
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

  let coinItems = fetchData.map((data, index) => {
    const {cmc_rank, name, quote:{USD:{price, market_cap}}} = data;
    return (
      <CoinItem
        key={index}
        rank={cmc_rank}
        name={name}
        price={price}
        volume={market_cap}
      />
    )
  });


  return loading? <View style={styles.loading}><Text>로딩중입니다...</Text></View>:(
    <ScrollView  style= {[styles.container, style]}>
      {coinItems}
    </ScrollView >
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