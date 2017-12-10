import React from 'react';
import { Text,View } from 'react-native';
import PeciamJSON from '../src/Components/PeciamJSON.js';

  export default class PratimuPeScreen extends React.Component {
    static navigationOptions = {
      title : 'Pratimai peciams'
    };
    render() {
      return (
        <View
          style={{flex:1}}>
         
          <PeciamJSON />
        
          </View>
      );
      
    }
  }