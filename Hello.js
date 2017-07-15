import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default class Hello extends React.Component {
    render(){
        return (
            <View>
                <Text style= {styles.hello}>Hello from Hello.js</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    hello: {
        backgroundColor: 'aqua',
        fontSize: 24
    }
});