import React from 'react';
import { Text,View } from 'react-native';
import KardioJSON from '../src/Components/KardioJSON.js';

  export default class KardioScreen extends React.Component {
    static navigationOptions = {
      title : 'Kardio pratimai'
    };
    render() {
      return (
        <View
          style={{flex:1}}>
          
          <KardioJSON />
          
          </View>
      );
      
    }
  }