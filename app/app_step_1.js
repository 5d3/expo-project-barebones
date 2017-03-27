import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textLarge}>Welcome to rmotr's Workshop!</Text>
        <Text style={styles.textSmall}>(Open up main.js to start working)</Text>
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

export default App;
