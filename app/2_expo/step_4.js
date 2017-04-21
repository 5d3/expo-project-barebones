import React from 'react';
import {
  View, Text, StyleSheet,
} from 'react-native';

class App extends React.Component {
  constructor(){
    super()
  }

  componentDidMount() {
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          coming soon
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50'
  },
});

export default App;
