const React = require("react-native");
import { 
  StyleSheet,
  Text, 
  View, 
  TextInput, 
  Button,
  StatusBar, 
  Platform,
} from 'react-native';
import {
  Container,
  Content,
  Header,
  Left,
  Body,
  Title,
  Right,
} from 'native-base';

export default {
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    height: '100%',
    width: '100%'
  },
  inputs: {
    backgroundColor: '#212121',
    padding: 20,

  },
  input: {
    height: 40,
    width: '100%',
    padding: 7,
    color: '#FFF',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  customTip:{
    height: 40,
    width: 60,
    padding: 7,
    color: '#000',
    backgroundColor: '#FFF'
  }
}