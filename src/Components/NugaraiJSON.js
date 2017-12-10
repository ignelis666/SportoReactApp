import React, { Component } from 'react';
import {StyleSheet,Platform, ActivityIndicator, ListView, Text, View , Image, TouchableOpacity,Alert} from 'react-native';


export default class Pratimai extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }
  

  GetItem (Aprasymas)
  {
    Alert.alert(Aprasymas);
  }

  componentDidMount() {
    return fetch('https://api.myjson.com/bins/abmlr.json')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.Pratimai),
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  ListViewas = () => {
    return (
      <View 
      style={{
        height: .5,
        width: "100%",
        backgroundColor: "#000",
      }}
      />
    );
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={styles.MainContainer}>
        <ListView
          dataSource={this.state.dataSource}
          renderSeparator={this.ListViewas}
          renderRow={(rowData) =>
          <View style={{flex:1,flexDirection: 'column'}} >
          <TouchableOpacity onPress={this.GetItem.bind(this, rowData.Aprasymas)}>
          <Text style={[styles.textViewContainer]} >{ rowData.PratimoName }</Text>
          <Text style={styles.textViewContainer} >{'Priejimai :'+ rowData.Priejimai }</Text>
         
          <Image source = {{ uri: rowData.image}} style={styles.Imidzas}/>

        
          </TouchableOpacity>
          </View>

          }
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
 
MainContainer :{
  justifyContent: 'center',
  flex:1,
  margin: 5,
  paddingTop: (Platform.OS === 'android') ? 20 : 0,
  backgroundColor: '#1874CD'
   

},

 
textViewContainer: {
  justifyContent: 'center',
 textAlign:'center', 
 padding:10,
 fontSize: 20,
 color: '#fff',
 
},

Imidzas:{

  width: 400,
  height: 250 ,
  alignItems: 'center',
   
  }
   
 
});