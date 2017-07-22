import React from 'react';
import { 
  StyleSheet,
  Text, 
  View,
} from 'react-native';

// functional stateless componenet

const Values = ({ tipPercent, bill }) => {
    let tip = 0.00;
      if(bill){
        tip = parseFloat(bill) * tipPercent;
        tip = (Math.round(tip * 100) / 100).toFixed(2)
      }
    return (
        <View>
            <Text>
                ${tip}
            </Text>
        </View>
    )
}

export default Values
