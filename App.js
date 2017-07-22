import Expo from 'expo';
import React from 'react';
import { 
  StyleSheet,
  Text, 
  View, 
  TextInput, 
  Button, 
  Alert,
} from 'react-native';
import {
  Container,
  Content,
} from 'native-base';
import styles from './styles';
import Head from './ui/Head';
import Values from './ui/Values';


export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      inputValue: '',
      tip: 0,
      isReady: false,
    };
  }
  async componentWillMount() {
      await Expo.Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      });
      this.setState({isReady: true})
  }
updateCustomTip(customTip){
  if(customTip){
    this.setState({
      tip: parseFloat(customTip) / 100,
    });
  } else {
    this.setState({ tip: 0 });
  }
}
// this is how you specify functions for ios and android
  // if (Platform === 'ios'){

  // }
  // if (Platform === 'android'){
    
  // }
// alert (){
//   Alert.alert(
//     'Just saying hi',
//     'This alert does nothing',
//     [
//       {
//         text: 'OK',
//         onPress: () => console.log ('Hit Ok')
//       },
//       {
//         text: 'Cancel',
//         onPress: () => console.log ('Hit Cancel')
//       }
//     ]
//   )
// }

  render() {
  if (!this.state.isReady){
    return <Expo.AppLoading />;
  }     
    return (
      <Container>
        <Head />
        <Content padder>
        <View style={styles.container}>
          {/*<Button 
            title="Alert"
            onPress={this.alert}
            />*/}
            <Values 
              tipPercent ={this.state.tip} 
              bill = {this.state.inputValue}
            />
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
                value={(this.state.tip * 100).toString()}
                style={styles.customTip}
                keyboardType= 'numeric'
                onChangeText={(customTip) => this.updateCustomTip(customTip)}
                placeholder='20%'
            />
          </View>
        </View>
        </Content>
      </Container>
    );
  }
}