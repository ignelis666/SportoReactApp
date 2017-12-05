import React from 'react';
import {AppRegistry,Button, StyleSheet, Text,TouchableHighlight, Image,View } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    alignItems: 'center',
    title: 'Sporto App'
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
    <Text>Pasirinkite kategorija!</Text>
    <TouchableHighlight onPress={()=> navigate('PratimaiKr')}>
    <Image style={{width: 100, height: 100}}
        source={{uri:'https://maxcdn.icons8.com/Share/icon/Sports//chest1600.png'}}
        />
      
</TouchableHighlight>

<TouchableHighlight onPress={()=> navigate('PratimaiKo')}>
    <Image style={{width: 100, height: 100}}
        source={{uri:'http://icons.iconarchive.com/icons/icons8/ios7/256/Sports-Leg-icon.png'}}
        />
</TouchableHighlight>
    
<TouchableHighlight onPress={()=> navigate('PratimaiPe')}>
    <Image style={{width: 100, height: 100, alignItems: 'center'}}
        source={{uri:'https://png.icons8.com/?id=9855&size=1600'}}
        />
</TouchableHighlight>
   
     <TouchableHighlight onPress={()=> navigate('PratimaiNu')}>
    <Image style={{width: 100, height: 100, alignItems: 'center'}}
        source={{uri:'https://maxcdn.icons8.com/Share/icon/Sports//back_muscles1600.png'}}
        />
</TouchableHighlight>
    
    <TouchableHighlight onPress={()=> navigate('Kardio')}>
    <Image style={{width: 100, height: 100, alignItems: 'center'}}
        source={{uri:'https://maxcdn.icons8.com/Share/icon/Healthcare//heart_health1600.png'}}
        />
</TouchableHighlight>
    
    </View>
    );
  }
}

class PratimuKrScreen extends React.Component {
  static navigationOptions = {
    title : 'Pratimai Krutinei'
  };
  render() {
    return (
      <View>
        <Text>Pratimai krutinei </Text>
        </View>
    );
  }
}

class PratimuKoScreen extends React.Component {
  static navigationOptions = {
    title : 'Pratimai Kojom'
  };
  render() {
    return (
      <View>
        <Text>Pratimai kojom </Text>
        </View>
    );
  }
}
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
    return <SimpleApp />;
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
