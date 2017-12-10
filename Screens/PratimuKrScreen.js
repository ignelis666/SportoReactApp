import React from 'react';
import { Text,View } from 'react-native';
import PratimaiJSON from '../src/Components/PratimaiJSON.js';

  export default class PratimuKrScreen extends React.Component {
    static navigationOptions = {
      title : 'Pratimai Krutinei'
    };
    render() {
      return (
        <View
          style={{flex:1}}>
          
          <PratimaiJSON />
         
          </View>
      );
      
    }
  }