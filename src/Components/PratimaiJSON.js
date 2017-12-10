import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View , TouchableOpacity,Alert} from 'react-native';

export default class Pratimai extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    return fetch('https://api.myjson.com/bins/cgj4f.json')
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
          <TouchableOpacity onPress={this.GetItem.bind(this, rowData.PratimoName)}>
          <Text style={styles.textViewContainer} >{'Pavadinimas '+ rowData.PratimoName }</Text>
          <Text style={styles.textViewContainer} >{'Priejimai '+ rowData.Priejimai }</Text>
          </TouchableOpacity>
          </View>

          }
        //  renderRow={(rowData) => <Text>{rowData.PratimoName},Priejimai {rowData.Priejimai}</Text>}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
 
MainContainer :{
 
// Setting up View inside content in Vertically center.
justifyContent: 'center',
flex:1,
paddingTop: (Platform.OS === 'android') ? 20 : 0,
backgroundColor: '#00BCD4',
padding: 5,
 
},
 
textViewContainer: {
 
 textAlignVertical:'center', 
 padding:10,
 fontSize: 20,
 color: '#fff',
 
}
 
});