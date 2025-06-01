
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';

const tokens = [
  {
    id: '1',
    name: 'Cardano',
    symbol: 'ADA',
    amount: 67.5,
    value: 27.75,
    icon:require("../assets/ADA.png") // replace with your local image
  },
  {
    id: '2',
    name: 'Hex Token',
    symbol: 'HEX',
    amount: 7.8,
    value: 4053,
    icon: require('../assets/hex.png'),
  },
  {
    id: '3',
    name: 'Protocol',
    symbol: 'Ocean',
    amount: 3.9,
    value: 2198,
    icon: require('../assets/ocean.png'),
  },
];

export default function CryptoAssets() {
  return (
    <View style={styles.container}>
    <View style = {{padding:20}}>
      <View style={styles.header}>
        <Text style={styles.assetsText}>Assets</Text>
        <Text style={styles.buyText}>Buy</Text>
      </View>

      <FlatList
        data={tokens}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.tokenRow}>
            <Image source={item.icon} style={styles.icon} />
            <View style={styles.tokenInfo}>
              <Text style={styles.symbol}>{item.symbol}</Text>
              <Text style={styles.name}>{item.name}</Text>
            </View>
            <Text style={styles.amount}>{item.amount}</Text>
            <Text style={styles.value}>${item.value.toLocaleString()}</Text>
          </View>
        )}
      />
    </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>+ 12 Tokens</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3D3D3D',
    borderRadius: 25,
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  assetsText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  buyText: {
    color: '#aaa',
    fontSize: 14,
  },
  tokenRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 12,
    borderRadius:30,
    padding:2
  },
  tokenInfo: {
    flex: 1,
  },
  symbol: {
    color: '#aaa',
    fontSize: 14,
    fontWeight: '600',
  },
  name: {
    color: '#fff',
    fontSize: 12,
  },
  amount: {
    color: '#fff',
    fontSize: 14,
    marginRight: 60,
    alignContent:'center',
    textAlign:'center',
    justifyContent:'center'
  },
  value: {
    color: '#fff',
    fontSize: 14,
  },
  button: {
    marginTop: 16,
    paddingVertical: 12,
    backgroundColor: '#474740',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
});
