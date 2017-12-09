import React from 'react';
import { Text,View } from 'react-native';
import PratimaiJSON from '../src/Components/PratimaiJSON.js';

  export default class PratimuKoScreen extends React.Component {
    static navigationOptions = {
      title : 'Pratimai Kojom'
    };
    render() {
      return (
        <View
          style={{flex:1}}>
          <Text>Pratimai kojom listas </Text>
          <PratimaiJSON />
          {/* <PratimaiJSON /> */}
          </View>
      );
      
    }
  }