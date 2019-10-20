/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Dimensions, Alert} from 'react-native';

const screenWidth = Dimensions.get('window').width;


export default class App extends Component {

  state = {
    ip: ''
  }

  getUserIP = () => {
    let url = `http://httpbin.org/ip`;
    return fetch(url).then((res) => res.json());
  }

  handleClick = () => {
    this.getUserIP()
    .then(
      res => {
        this.setState({ip: res});
        Alert.alert(`Your IP Address is:`, this.state.ip.origin);
      });

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>MyIPLocator</Text>
        <TouchableOpacity 
          style={styles.button}
          activeOpacity={0.8}
          onPress={this.handleClick}>
            <Text style={styles.buttonText}>Find My IP</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#F5FCFF',
  },

  button: {
    backgroundColor: '#263238',
    height: 45,
    flexDirection: 'row',
    borderColor: '#263238',
    borderWidth: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 8,
    marginTop: 280,
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    alignSelf: 'center',
  },

  title: {
    width: screenWidth,
    backgroundColor: '#000000',
    alignSelf: 'stretch',
    fontSize: 18,
    alignSelf:'center',
    justifyContent: 'center',
    height: 50,
    padding: 10,
    width: screenWidth,
    color: '#FFFFFF',
  },
 
});
