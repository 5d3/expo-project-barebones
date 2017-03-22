import Expo from 'expo';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image  // https://facebook.github.io/react-native/docs/image.html
} from 'react-native';

class App extends React.Component {
  onButtonPress(){
    console.log("Click!")
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={{uri: 'https://cloud.githubusercontent.com/assets/872296/23481309/c189d68e-fea9-11e6-83be-9e1ec5b53e61.png'}}
        />
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
  logo: {
    width: 120,
    height: 120
  },
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

Expo.registerRootComponent(App);
