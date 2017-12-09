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

class PratimuPeScreen extends React.Component {
  static navigationOptions = {
    title : 'Pratimai pečiams'
  };
  render() {
    return (
      <View>
        <Text>Pratimai pečiams </Text>
        </View>
    );
  }
}
class PratimuNuScreen extends React.Component {
  static navigationOptions = {
    title : 'Pratimai nugarai'
  };
  render() {
    return (
      <View>
        <Text>Pratimai nugarai </Text>
        </View>
    );
  }
}
class KardioScreen extends React.Component {
  static navigationOptions = {
    title : 'Kardio pratimai'
  };
  render() {
    return (
      <View>

        <Text>Kardio pratimai </Text>
        </View>
    );
  }
}

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
