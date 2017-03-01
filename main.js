import Exponent from 'exponent';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button  // https://facebook.github.io/react-native/docs/button.html
} from 'react-native';

class App extends React.Component {
  onButtonPress(){
    console.log("Click!")
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textLarge}>Welcome to rmotr's Workshop!</Text>
        <Text style={styles.textSmall}>(Open up main.js to start working)</Text>
          <Button
            onPress={this.onButtonPress.bind(this)}
            title="Press Me"
            color="#f1edd2"
            accessibilityLabel="See an informative alert"
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242434',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLarge: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#21b274'
  },
  textSmall: {
    color: '#21b274'
  }
});

Exponent.registerRootComponent(App);
