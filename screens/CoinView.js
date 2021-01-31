import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {StyleSheet, Text, View} from 'react-native';
import CoinItem from '../components/CoinItem';
import {PRIVATE_KEY} from  '../config';
// const sampleData = [
//   {
//         "id": "bitcoin",
//         "name": "Bitcoin",
//         "symbol": "BTC",
//         "rank": "1",
//         "price_usd": "6195.6",
//         "price_btc": "1.0",
//         "24h_volume_usd": "8119580000.0",
//         "market_cap_usd": "103323711420",
//         "available_supply": "16676950.0",
//         "total_supply": "16676950.0",
//         "max_supply": "21000000.0",
//         "percent_change_1h": "-1.8",
//         "percent_change_24h": "4.19",
//         "percent_change_7d": "-15.65",
//         "last_updated": "1510556652"
//     },
//     {
//         "id": "ethereum",
//         "name": "Ethereum",
//         "symbol": "ETH",
//         "rank": "2",
//         "price_usd": "310.13",
//         "price_btc": "0.0493027",
//         "24h_volume_usd": "1636680000.0",
//         "market_cap_usd": "29678006174.0",
//         "available_supply": "95695373.0",
//         "total_supply": "95695373.0",
//         "max_supply": null,
//         "percent_change_1h": "-0.89",
//         "percent_change_24h": "1.81",
//         "percent_change_7d": "4.39",
//         "last_updated": "1510556649"
//     },
// ];

const CoinView = ( {style} ) => {

  const [fetchData,SetFetchData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCoinData = async() => {
    try {
      setLoading(true)
      const { data:{data} } = await axios({
        url:'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
        params: {
          'start': '1',
          'limit': '100',
          'convert': 'USD'
        },
        headers: {
        'X-CMC_PRO_API_KEY': PRIVATE_KEY
      }});
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

  console.log(fetchData)
  let coinItems = fetchData.map((data, index) => {
    const {cmc_rank, name, quote:{USD:{price,market_cap}}} = data;
    return (
      <CoinItem
        key={index}
        rank={cmc_rank}
        name={name}
        price={price}
        volum={market_cap}
      />
    )
  });


  return loading? <View style={styles.loading}><Text>로딩중입니다...</Text></View>:(
    <View style= {[styles.container, style]}>
      {coinItems}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  }
});

export default CoinView;