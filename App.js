import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import Hello from './Hello';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      inputValue: '',
      tip: 0,
    };
  }


  render() {
      let tip = 0.00;
      if(this.state.inputValue){
        tip = parseFloat(this.state.inputValue) * this.state.tip;
        tip = (Math.round(tip * 100) / 100).toFixed(2)
      }
    return (
      <View style={styles.container}>
        <Text>
          ${tip}
        </Text>
        <TextInput
          placeholder='Enter bill ammount'
          style={styles.input}
          value={this.state.inputValue}
          keyboardType= 'numeric'
          onChangeText={(text) => this.setState({inputValue: text})}
        />
        <View style = {styles.buttonGroup}>
          <Button 
          title="10%"
          onPress={() => this.setState({tip: 0.1})}
          />
           <Button 
          title="20%"
          onPress={() => this.setState({tip: 0.2})}
          />
           <Button 
          title="25%"
          onPress={() => this.setState({tip: 0.25})}
          />
          <TextInput
              keyboardType= 'numeric'
              onChangeText={(customtip) => this.updateCustomTip(customtip)}
              placeholder='20%'
           />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#333',
    borderWidth: 1,
    padding: 7,
  },
  buttonGroup: {
    flexDirection: 'row',
  }
});
