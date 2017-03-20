import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native';

import io from 'socket.io-client'

const SERVER_URL = 'http://192.168.0.17:4000'

export default class deadmouse extends Component {
  constructor() {
    super()

    this.socket = io(SERVER_URL)
    this.socket.on('connect', () => console.log(`connected`))
  }

  _pressButton(e) {
    console.log(e)
    this.socket.emit('move', { x: 1, y: 0})
  }

  render() {
    return (
      <TouchableWithoutFeedback style={styles.container} onPress={this._pressButton}>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Deadmouse
          </Text>
          <Text style={styles.instructions}>
            Drag with one finger to move cursor and with two fingers to scroll.
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 30,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
