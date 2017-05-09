import React from 'react';
import {
  View, // https://facebook.github.io/react-native/docs/view.html
  Text, // https://facebook.github.io/react-native/docs/text.html
  StyleSheet, // https://facebook.github.io/react-native/docs/stylesheet.html
  Image, // https://facebook.github.io/react-native/docs/image.html
  Button, // https://facebook.github.io/react-native/docs/button.html
  TouchableOpacity, // https://facebook.github.io/react-native/docs/touchableopacity.html
  TextInput, // https://facebook.github.io/react-native/docs/textinput.html
  Dimensions, // https://facebook.github.io/react-native/docs/dimensions.html
  ScrollView, // https://facebook.github.io/react-native/docs/scrollview.html
  Platform, // https://facebook.github.io/react-native/docs/platform-specific-code.html
} from 'react-native';

import CustomButton from '../components/CustomButton';

const fullWidth = Dimensions.get('window').width;

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      title: "Welcome!",
      items: [
        {'name': 'Item1', 'id': 1},
        {'name': 'Item2', 'id': 2},
        {'name': 'Item3', 'id': 3},
        {'name': 'Item4', 'id': 4},
        {'name': 'Item5', 'id': 5},
        {'name': 'Item6', 'id': 6},
        {'name': 'Item7', 'id': 7},
        {'name': 'Item8', 'id': 8},
        {'name': 'Item9', 'id': 9},
        {'name': 'Item10', 'id': 10},
        {'name': 'Item11', 'id': 11},
        {'name': 'Item12', 'id': 12}
      ]
    };

    this.onButtonPress = this.onButtonPress.bind(this)
    this.renderItems = this.renderItems.bind(this)
  }

  onButtonPress(){
    console.log('Pressed')

    this.setState({
      title: "Button was pressed!"
    });
  }

  renderItems() {
    return this.state.items.map(item => {
      return (
        <Text key={item.id} style={styles.scrollItem}>
          {item.name}
        </Text>
      );
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.section, { flex: 1 }]}>
          <Image
            style={styles.logo}
            source={{uri: 'http://i.imgur.com/GfAe1bp.png'}}
          />

          <Text style={styles.textLarge}>
            {this.state.title}
          </Text>

          <Text style={styles.textSmall}>
            (Open up main.js to start working)
          </Text>

          <Text style={styles.textSmall}>
            {`Platform specific text: ${Platform.OS === 'ios' ? 'This is iOS!' : 'This is Android!' }`}
          </Text>
        </View>

        <View style={styles.section}>
          <Button
            onPress={this.onButtonPress.bind(this)}
            title="Press Me"
            color={'#16a085'}
            accessibilityLabel="See an informative alert"
          />

          <CustomButton
            onPress={this.onButtonPress}
            title="Our custom button"
          />
        </View>

        <View style={styles.section}>
          <TextInput
            style={styles.textInput}
            onChangeText={(title) => this.setState({title})}
            value={this.state.title}
            autoCorrect={false}
            placeholder={'This is a placeholder!'}
            underlineColorAndroid={'transparent'}
            keyboardAppearance={'dark'}
            returnKeyType={"send"}
          />
        </View>

        <View style={styles.scrollContainer}>
          <ScrollView>
              {this.renderItems()}
          </ScrollView>
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
  logo: {
    width: 60,
    height: 60,
    marginBottom: 20
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
  textInput: {
    height: 30,
    color: '#333',
    fontSize: 14,
    fontWeight: '500',
    width: fullWidth - 20,
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 5
  },
  scrollContainer: {
    backgroundColor: '#ecf0f1',
    height: 150
  },
  scrollItem: {
    fontSize: 13,
    fontWeight: '100',
    padding: 5
  },
});

export default App;
