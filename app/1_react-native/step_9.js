import React from 'react';
import {
  View, Text, StyleSheet,
  AsyncStorage, // https://facebook.github.io/react-native/docs/asyncstorage.html
} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          AsyncStorage
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginTop: 20,
    marginBottom: 10,
  },
});

export default App;
