import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import Octicons from '@expo/vector-icons/Octicons';
import AssetScreen from './screens/AssetScreen';

const WalletScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.qrContainer}>
        <TouchableOpacity>
          <View style={styles.backArrow}>
            <Ionicons name="chevron-back-outline" size={18} color="white" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.qrIcon}><AntDesign name="qrcode" size={30} color="#fff" /></View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image 
            source={require('./assets/profile-image.png')}
            style={styles.profileIcon}
          />
        </TouchableOpacity>
      </View>
      
      <Text style={styles.walletLabel}>Your Wallet</Text>
      <Text style={styles.walletAmount}>
        40,278.00 <Text style={{ fontSize: 23, color: '#B0B0B0', fontFamily: 'Helvetica' }}>USDT</Text>
      </Text>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.withdrawButton}>
          <Text style={styles.buttonText1}>Withdraw</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.depositButton}>
          <Text style={styles.buttonText}>Deposit</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.qrIcon}><Octicons name="link" size={24} color="white" /></Text>
        </TouchableOpacity>
      </View>

      <View style={styles.stakingContainer}>
        <Text style={styles.stakingText}>Staking & tokens</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.separator} />
      
      <View style={styles.container2}>
        <Text style={styles.title}>Tokens</Text>
        <Text style={styles.value}>$327k</Text>
      </View>
      
      <View style={styles.barContainer}>
        <View>
        <View style={styles.stakingInfo}>
          <Text style={styles.title}>Staking Tokens</Text>
          <Text style={styles.value}>$562.7k</Text>
        </View>
           <View style={styles.separator2} />
       </View>
       
        
        <Image 
          source={require('./assets/barchart.png')} 
          style={styles.barChart}
        />
      </View>
      <AssetScreen />
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E',
    paddingTop:30,
    padding: 10,
    paddingBottom:50
  
  },
  qrContainer: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    padding: 2,
    paddingVertical: 20,
  },
  backArrow: {
    width: 40,
    height: 40,
    marginRight: 225,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderWidth: 0.4,
    borderColor: '#fff',
  },
  qrIcon: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 30,
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#3D3D3D',
  },
  profileIcon: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  walletLabel: {
    color: '#B0B0B0',
    fontSize: 16,
    marginBottom: 10,
  },
  walletAmount: {
    fontSize: 36,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  withdrawButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    paddingVertical: 15,
    marginRight: 10,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
  buttonText1: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  depositButton: {
    backgroundColor: '#3D3D3D',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    flex: 0.9,
    alignItems: 'center',
    marginRight: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  stakingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  stakingText: {
    color: '#B0B0B0',
    fontSize: 18,
  },
  seeAllText: {
    color: '#fff',
    fontSize: 16,
    backgroundColor: '#3D3D3D',
    paddingVertical: 1,
    paddingHorizontal: 10,
    borderRadius: 30,
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 4,
  },
  value: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  separator: {
    height: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 10,
  },
  separator2: {
    height: 1,
    width:200,
    backgroundColor: '#FFFFFF',
  },
  barContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap:25
  },
  stakingInfo: {
    flex: 0.4,
    flexDirection:'row',
    paddingRight:1,
    gap:20,
    justifyContent:'space-between'
    
  },
  barChart: { 
    width: 150,
    height: 100,
  },
});

export default WalletScreen;