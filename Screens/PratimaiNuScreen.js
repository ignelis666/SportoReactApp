import React from 'react';
import { Text,View } from 'react-native';
import PratimaiJSON from '../src/Components/PratimaiJSON.js';

  export default class PratimaiNuScreen extends React.Component {
    static navigationOptions = {
      title : 'Pratimai nugarai'
    };
    render() {
      return (
        <View
          style={{flex:1}}>
          <Text>Kardio pratimai </Text>
          <PratimaiJSON />
          {/* <PratimaiJSON /> */}
          </View>
      );
      
    }
  }