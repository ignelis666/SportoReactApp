import React from 'react';
import { Text,View,TouchableHighlight,Image } from 'react-native';
import PratimaiJSON from '../src/Components/PratimaiJSON.js';

export default class App extends React.Component {
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
        
      
      
  