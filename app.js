// @flow

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Modal,
  WebView,
  TouchableHighlight,
  Dimensions
} from 'react-native';

const page = require('./page.html');

export default class SETDemo extends Component {

  state = {
    modalVisible: false
  }

  toggleWebview(visible) {
    this.setState({ modalVisible: visible || !this.state.modalVisible });
  }

  onPressGetStarted() {
    this.toggleWebview();
  }

  onMessage = (e) => {
    console.log(e)
    if (e.nativeEvent.data === 'closeWebview') {
      this.toggleWebview();
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
          <WebView
            style={{flex: 1, marginTop: 20}}
            scalePageToFit={true}
            javascriptEnabled={true}
            domStorageEnabled={true}
            source={page}
            onMessage={this.onMessage}
            onError={() => alert('load error')}
          />
        </Modal>

        <Text style={styles.welcome}>
          Welcome to Catflix!
        </Text>
        <Text style={styles.instructions}>
          To get started, tap the button below.
        </Text>
        <Button
          onPress={this.onPressGetStarted.bind(this)}
          title="Get Started"
          color="#841584"
          accessibilityLabel="Get started with Catflix"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
