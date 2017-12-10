import React from 'react';
import { Text,View } from 'react-native';
import NugaraiJSON from '../src/Components/NugaraiJSON.js';

  export default class PratimaiNuScreen extends React.Component {
    static navigationOptions = {
      title : 'Pratimai nugarai'
    };
    render() {
      return (
        <View
          style={{flex:1}}>
         
          <NugaraiJSON />
       
          </View>
      );
      
    }
  }