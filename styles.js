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

export default {
    header:{
      ...Platform.select({
        android: {marginTop: Statusbar.currentHeight
        },
      }),    
    },
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
  },
  customTip:{
    height: 40,
    width: 60,
    borderColor: '#333',
    borderWidth: 1,
    padding: 7,
  }
}