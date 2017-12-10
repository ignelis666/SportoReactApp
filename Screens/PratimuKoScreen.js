import React from 'react';
import { Text,View } from 'react-native';
import KojomJSON from '../src/Components/KojomJSON.js';

  export default class PratimuKoScreen extends React.Component {
    static navigationOptions = {
      title : 'Pratimai Kojom'
    };
    render() {
      return (
        <View
          style={{flex:1}}>
          
          <KojomJSON />
          
          </View>
      );
      
    }
  }