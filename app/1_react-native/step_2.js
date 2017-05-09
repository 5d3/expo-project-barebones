import React from 'react';
import {
  View, // https://facebook.github.io/react-native/docs/view.html
  Text, // https://facebook.github.io/react-native/docs/text.html
  StyleSheet, // https://facebook.github.io/react-native/docs/stylesheet.html
  Image, // https://facebook.github.io/react-native/docs/image.html
} from 'react-native';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      title: 'Welcome!',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.section, { flex: 1 }]}>
          <Image
            style={styles.logo}
            source={{ uri: 'http://i.imgur.com/GfAe1bp.png' }}
          />

          <Text style={styles.textLarge}>
            {this.state.title}
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
    padding: 10,
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 20,
  },
  textLarge: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  textSmall: {
    color: '#34495e',
    fontStyle: 'italic',
    paddingBottom: 5,
  },
});

export default App;
