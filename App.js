import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { isRearCameraAvailable } from 'expo/build/AR';


export default class App extends React.Component{
  constructor (props){
  super (props);
  this.state = {
  contador: 0
  }}
  render (){
  return (
  <View style={styles.container}>
  <Text>{this.state.contador}</Text>
  <Button
  title="Somar +1 no contador"
  onPress={() => {this.setState({contador: this.state.contador + 1})}}
  />

<View style={styles.container}>
    <Text>{this.state.contador}</Text>
    <Button
    title="SORTEIO"
    onPress={() => {this.setState({contador: this.state.contador + 1})}}
    />
    </View>
  </View>
  );
  }    
}





const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'gray',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });