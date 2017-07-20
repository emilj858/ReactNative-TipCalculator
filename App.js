import Expo from 'expo';
import React from 'react';
import { 
  StyleSheet,
  Text, 
  View, 
  TextInput, 
  Button 
} from 'react-native';
import styles from './styles';
import {
  Container,
  Content,
  Header,
  Left,
  Body,
  Title,
  Right,
} from 'native-base';


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

  render() {
      let tip = 0.00;
      if(this.state.inputValue){
        tip = parseFloat(this.state.inputValue) * this.state.tip;
        tip = (Math.round(tip * 100) / 100).toFixed(2)
      }
  if (!this.state.isReady){
    return <Expo.AppLoading />;
  }     
    return (
      <Container>
        <Header>
            <Left/>
            <Body>
                <Title>Header</Title>
            </Body>
            <Right />
        </Header>
   
        <Content padder>
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