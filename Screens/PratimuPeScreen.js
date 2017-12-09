import React from 'react';
import { Text,View } from 'react-native';
import PratimaiJSON from '../src/Components/PratimaiJSON.js';

  export default class PratimuPeScreen extends React.Component {
    static navigationOptions = {
      title : 'Pratimai peciams'
    };
    render() {
      return (
        <View
          style={{flex:1}}>
          <Text>Cia atvaizduojam peciam </Text>
          <PratimaiJSON />
          {/* <PratimaiJSON /> */}
          </View>
      );
      
    }
  }