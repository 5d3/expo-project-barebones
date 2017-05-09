import React from 'react';
import {
  View, Text, StyleSheet,
  AsyncStorage, // https://facebook.github.io/react-native/docs/asyncstorage.html
} from 'react-native';

class App extends React.Component {
  constructor(){
    super()
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.section, { flex: 1 }]}>
          <Text style={styles.textLarge}>
            Welcome!
          </Text>

          <Text style={styles.textSmall}>
            (Open up main.js to start working)
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#eee',
    padding: 10
  },
  textLarge: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50'
  },
  textSmall: {
    color: '#34495e',
    fontStyle: 'italic',
    paddingBottom: 5
  },
});

export default App;
