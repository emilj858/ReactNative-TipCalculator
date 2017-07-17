import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import Hello from './Hello';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      inputValue:""
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          {this.state.inputValue}
        </Text>
        <TextInput placeholder='Enter bill ammount'
          style={styles.input}
          value={this.state.inputValue}
          onChangeText={(text)=> this.setState({inputValue: text})}
         
        />
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
  }
});
