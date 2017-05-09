import React from 'react';
import {
  View, Text, Button, StyleSheet,
  AsyncStorage, // https://facebook.github.io/react-native/docs/asyncstorage.html
} from 'react-native';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      items: [],
    };

    // each item will have that format:
    // ['key', 'item']

    this.getItems = this.getItems.bind(this);
    this.saveItem = this.saveItem.bind(this);
    this.clearItems = this.clearItems.bind(this);
  }

  componentWillMount() {
    this.getItems();
  }

  getItems() {
    AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (err, items) => {
        console.log('Received items:');
        items.map((item) => {
          // get at each item's key/value so you can work with it
          const key = item[0];
          const value = item[1];

          console.log(key, value);
        });

        this.setState({
          items,
        });
      });
    });
  }

  saveItem() {
    const date = new Date();
    const key = date.toISOString();

    AsyncStorage.setItem(key, 'item', (err) => {
      console.log(err);
    });

    this.setState({
      items: [...this.state.items, [key, 'item']],
    });
  }

  clearItems() {
    AsyncStorage.clear((err) => {
      console.log(err);
    });

    this.setState({
      items: [],
    });
  }

  render() {
    const { items } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.itemsContainer}>
          <Text style={styles.title}>
            AsyncStorage
          </Text>

          { items.length ?
            items.map(item => (
              <Text key={item[0]} style={styles.item}>
                {item[1]}
              </Text>
              )) :
            <Text>No items saved yet.</Text>
          }
        </View>

        <Button
          title="Save new item"
          onPress={this.saveItem}
        />

        <Button
          color={'red'}
          title="Clear items"
          onPress={this.clearItems}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginTop: 20,
    marginBottom: 10,
  },

  itemsContainer: {
    flex: 1,
  },

  item: {
    color: '#555',
    fontSize: 14,
    fontWeight: '700',
    marginVertical: 5,
    marginHorizontal: 20,
  },
});

export default App;
