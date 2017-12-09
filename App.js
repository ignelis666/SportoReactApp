import React from 'react';
import {AppRegistry,StyleSheet, Text,TouchableHighlight, Image,View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { ScrollView } from 'react-native';
import PratimDetail from './src/Components/PratimDetail';
import Button from './src/Components/Button';
import Pratimai from './src/Components/PratimaiJSON.js';
import PratimuKrScreen from './Screens/PratimuKrScreen';
import PratimuKoScreen from './Screens/PratimuKoScreen';
import HomeScreen from './Screens/HomeScreen';
import KardioScreen from './Screens/KardioScreen';
import PratimuPeScreen from './Screens/PratimuPeScreen';
import PratimuNuScreen from './Screens/PratimaiNuScreen';



const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  PratimaiKr : {screen: PratimuKrScreen},
  PratimaiKo : {screen: PratimuKoScreen},
  PratimaiNu : {screen: PratimuNuScreen},
  Kardio : {screen : KardioScreen},
  PratimaiPe : {screen : PratimuPeScreen}
});

export default class App extends React.Component {
  render() {
    return (     
<SimpleApp />     
          )  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
